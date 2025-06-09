const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = decoded;
        next();
    });
};

// Middleware to check if the user is not authenticated
const isNotAuthenticated = (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        return res.redirect('/tasks');
    }

    next();
};

module.exports = {
    isAuthenticated,
    isNotAuthenticated
};