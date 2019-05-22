const User = require('../../models/user');
const secure = require('../../utils/secure');

const me = async function (req, res, next) {
    let {token} = req.cookies;
    if (token === "") res.json({});
    let _id = await secure.verifyToken(token);
    let user = await User.findOne({ _id });
    if (!user) res.json({});
    const {
        login,
        email,
        role,
        cart,
    } = user.toObject();
    const result = {login, email, role, cart};
    res.setHeader('content-type', 'application/json');
    res.json(result);
};

module.exports = me;