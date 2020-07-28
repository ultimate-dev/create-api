const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = (req.headers.token || req.body.token || req.query.token);
    if (token) {
        jwt.verify(token, req.app.get('secret_key'), (err, decoded) => {
            if (err) {
                res.json({
                    status: false,
                    message: 'Token Not Verified'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.json({
            status: false,
            message: 'Token Not Found',
        });
    }
};
