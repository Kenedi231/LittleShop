const secure = require('../../utils/secure');
const User = require('../../models/user');

const updateCart = async function(req, res, next) {
    let {token} = req.cookies;
    let {cart} = req.body;
    if (token === "") res.json({});
    let _id = await secure.verifyToken(token);
    let user = await User.updateOne({ _id }, {
        cart,
    });
    if (!user) next({});
    let result = {
        "status": "ok",
        "code": 0,
    };
    res.json(result);
};

module.exports = updateCart;