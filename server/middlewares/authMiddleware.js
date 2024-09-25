const { SECRET } = require('../config/config');
const jwt = require('jsonwebtoken');

exports.authMiddaweare = async (req, res, next) => {
    
     const authHeaders = req.headers['x-authorization'];

    if(!authHeaders) {
        return next()
    }

    try {
        const decoded = jwt.verify(authHeaders, SECRET);
        req.user = decoded;

        next();
    } catch (err) {
        res.json('Failed!')
    }
}
