// Imports

const jwt = require('jsonwebtoken');
const JWT_SIGN_SECRET = '0qrgu68fnmpasd672dat83qsf9unbv3wa78zsq93fpoinbvh53c6qwdgf458ssqqshgjut9f6drf95sd';

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '24h'
        })
    },
    parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;   // On efface " Bearer pour ne récupérer que le token"
    },
    getUserId: function(authorization) {
        let userId = -1;
        let token = module.exports.parseAuthorization(authorization);
        if (token != null) {
            try {
                let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if (jwtToken != null)
                userId = jwtToken.userId;
            } catch(err) {}
        }
        return userId;
    }
}