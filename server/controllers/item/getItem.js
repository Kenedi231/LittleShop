const Item = require('../../models/item');

const getItem = async function (req, res, next) {
    const {number} = req.body;
    const item = await Item.findOne({number});
    if (!item) next({});
    res.json({
        'status': 'ok',
        item,
    });
};

module.exports = getItem;