const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"unauthorized"})
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
        if (err) {
            return res.status(403).json({ message: err.message });
        }
        req.user = decode;
        next();
    });
};
module.exports = verifyJWT;