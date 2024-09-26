const  JWT_SECRET  = require("../config.js");
const jwt = require("jsonwebtoken");

const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: "Authorization header missing or malformed"
        });
    }

    const token = authHeader.split(' ')[1];
    
    try {
        
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;
        

        next();
    } catch (err) {
        return res.status(403).json({
            message:"Token Is Invalid"
        });
    }

    
};

module.exports = {
    authmiddleware
};
