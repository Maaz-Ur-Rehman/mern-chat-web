const userModel = require("../model/userModel");

const loginUserForSideBar = async (req, res) => {
    try {
        const userId = req.userId;

        const allUser = await userModel.find({ _id: { $ne: userId } });

        res.status(200).json(allUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            err: err.message,
        })
    }
}

module.exports = { loginUserForSideBar };
