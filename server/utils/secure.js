const jwt = require('jsonwebtoken');
const config = require('../../config');

let Secure = function () {
    const SECRET = config.secret;

    let getSecretPhrase = () => {
        return SECRET;
    };

    let generateToken = async (userEntityId) => {
        return await jwt.sign({ _id : userEntityId }, SECRET);
    };

    let verifyToken = async (token) => {
        return await jwt.verify(token, SECRET);
    };

    return {
        getSecretPhrase : getSecretPhrase,
        generateToken : generateToken,
        verifyToken : verifyToken
    }
};

module.exports = new Secure();