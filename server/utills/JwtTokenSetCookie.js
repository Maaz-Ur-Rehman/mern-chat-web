const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

const JwtTokenSetCookie = (userId, res) => {

    // console.log(user._id, "res")

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    // res.cookie("useranma","maaz")
    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		// httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		domain:"http://localhost:3000",
        secure: true,
        sameSite: "none", // prevent CSRF attacks cross-site request forgery attacks
    });

    return token
}

module.exports = JwtTokenSetCookie