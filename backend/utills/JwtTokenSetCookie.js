const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

const JwtTokenSetCookie = (userId, res) => {

    // console.log(user._id, "res")

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
    });

    return token
}

module.exports = JwtTokenSetCookie