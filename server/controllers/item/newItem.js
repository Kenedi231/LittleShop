const Item = require('../../models/item');
const path = require('path');

const createNumber = require('../../utils/createNumber');
const createShortDescription = require('../../utils/createShorDescription');

const newItem = async function (req, res, next) {
    const {name, price, description} = req.body;
    const number  = createNumber(7);
    const shortDescription = createShortDescription(description);
    let imageFile = req.files.file;
    const url = path.join('/images/', `${number}.jpg`);
    const imagePath = path.join(__dirname, '../../../public', url);
    imageFile.mv(imagePath, function (err) {
       if (err) return res.status(500).send(err);
    });
    let item;
    try {
        item = await Item.create({
            number,
            name,
            price: +price,
            Description: description,
            shortDescription,
            image: url
        });
        if (!item) throw {};
    } catch (err) {
        if (err) return res.status(500).send(err);
    }

    res.json({
        "message": "ok",
        "url": url,
    });
};

module.exports = newItem;