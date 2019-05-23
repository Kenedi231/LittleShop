const User = require('../../models/user');
const secure = require('../../utils/secure');

const addItemToCart = async function(req, res, next) {
    let {token} = req.cookies;
    let {number} = req.body;
    if (token === "") res.json({});
    let _id = await secure.verifyToken(token);
    let user = await User.findOne({ _id });
    let equally = false;
    if (!user) next({});
    const {cart} = user.toObject();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].number === number) {
            equally = true;
            break;
        }
    }
    if (!equally) {
        const newItem = {
            number,
            count: 1,
        };
        cart.push(newItem);
        let updateUser = await User.updateOne({ _id}, {
            cart,
        });
        if (!updateUser) res.json({});
        res.json({
            'status': 'ok',
            'code': 1,
            'message': 'Item has been added!',
        });
    } else {
        res.json({
            'status': 'warn',
            'code': 2,
            'message': 'This item has already been added!',
        })
    }
};

module.exports = addItemToCart;