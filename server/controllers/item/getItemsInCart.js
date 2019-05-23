const Item = require('../../models/item');

const getItemsInCart = async function (req, res, next) {
    const {cart} = req.body;
    const result = [];
    for (let i = 0; i < cart.length; i++) {
        let item = await Item.findOne({number: cart[i].number});
        result.push(item);
    }
    res.json({
        'status': 'ok',
        'code': 1,
        items: result,
    })
};

module.exports = getItemsInCart;