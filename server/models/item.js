const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const itemSchema = new Schema({
    number: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Description: {
        type: String,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    coll: {
        type: String,
        default: 'items',
    },
});

module.exports = mongoose.model('Item', itemSchema);