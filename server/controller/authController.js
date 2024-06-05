
const { hashPassword, comparePassword } = require("../utills/passwordUtills.js");
const JwtTokenSetCookie = require("../utills/JwtTokenSetCookie.js");
const userModel = require("../model/userModel");
const login = async (req, res, next) => {

    try {

        const { username, password } = req.body;
        console.log(username, password, "username")
        const user = await userModel.findOne({ username: username });
        // console.log(!user, "user");
        // if (!user) {
        //     return res.status(400).json({ error: "user not found" });
        // }
        const isMatch = await comparePassword(password, user?.password || "")
        // console.log(!user, "isMatch")

        if (!user || !isMatch) {
            return res.status(400).json({ error: "incorrect credential" });
        }
        let token = await JwtTokenSetCookie(user._id, res);


        // console.log(token,"generated")

        res.status(200).json({ message: "login success", token: token,user:user  });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            err: err.message,
        })
    }

}

const signup = async (req, res) => {

    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "passwords do not match" });
        }

        // const user = await userModel.find({ username: username });
        // if (user.length > 0) {
        //     return res.status(400).json({ error: "username already exists" });
        // }

        // console.log(password, "password")
        let hashPass = await hashPassword(password);

        // console.log(hashPass, "password")
        // https://avatar.iran.liara.run/public/boy
        const profilePicBoy = ` https://avatar.iran.liara.run/public/boy?username=${username}`;
        const profilePicGirl = ` https://avatar.iran.liara.run/public/girl?username=${username}`;


        const newUser = new userModel({
            fullname: fullname,
            password: hashPass,
            username: username,
            gender: gender,
            profilePic: gender === "male" ? profilePicBoy : profilePicGirl,
        })
        if (newUser) {

            console.log(newUser._id.toString(), "newUser")
            let token = JwtTokenSetCookie(newUser._id, res);
            // console.log(res, "token")
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
                token: token
            })

        }
        else {
            res.status(400).json({ error: "user not created" });
        }

        // res.send("signup success");
    }
    catch (err) {
        console.log(err, "error creating")
        res.status(500).json({ error: "internal server error", err });

    }
}

const logout = async (req, res) => {
    try {
       const data= res.clearCookie("token");
        // console.log(data, "res")

        res.status(200).json({ message: "logout success" });
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = { login, signup, logout };