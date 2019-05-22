const Item = require('../../models/item');

const getItems = async function (req, res, next) {
    const items = await Item.find({});
    if (!items) throw next({});
    res.json({
        "message": "ok",
        items,
    })
};

module.exports = getItems;