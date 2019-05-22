const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true,
        index: {
            unique: true,
        },
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'User',
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    cart: {
        type: Array,
        default: [],
    },
    coll: {
        type: String,
        default: 'users',
    }
});

userSchema.methods.checkPassword = async function(pass) {
    let isMatch;
    isMatch = await new Promise((resolve, reject) => {
        bcrypt.compare(pass, this.password, function (err, match) {
            if (err) reject(false);

            resolve(match);
        });
    });
    return isMatch;
};

module.exports = mongoose.model('User', userSchema);