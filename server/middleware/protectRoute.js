const jwt = require('jsonwebtoken')

const protectRoute = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if(authorization && authorization.startsWith("Bearer")) {
            const token = authorization.split(" ")[1];
            // console.log(token, "token")
            if (!token) {
                return res.status(400).json({ error: "you need to login" });
            }
            const verify = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(verify, "verify")
            req.userId = verify.userId;
            next();
        }
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports = protectRoute;