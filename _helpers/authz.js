const jwt = require('express-jwt');
const { secret } = require('config.js');

module.exports = {checkRoleAccess};

function checkRoleAccess(role) {
    return [
        jwt({ secret, algorithms: ['HS256'] }),
        (req, res, next) => {
            if (role && role != req.user.roles) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            next();
        }
    ];
}
