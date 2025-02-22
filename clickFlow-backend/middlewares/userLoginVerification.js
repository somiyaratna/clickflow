const jwt = require('jsonwebtoken');

const userLoginVerification = (req, res, next) => {
    // const token = req.headers['authorization'];
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided, authorization denied." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token is not valid." });
        }

        req.user = decoded; // Attach the decoded user information to the request object
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = userLoginVerification;
