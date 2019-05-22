const bcrypt = require('bcrypt-nodejs');

const secure = require('../../utils/secure');
const User = require('../../models/user');

const signUp = async function (req, res, next) {
    let {login, password, email} = req.body;
    let token;
    let find = await User.findOne({login});
    if (find) {
        res.setHeader('content-type', 'application/json');
        res.json({
            "code": 1,
            "message": "Such user already exists!",
        })
    }
    let user;
    let salt = await new Promise(function (resolve, reject) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) reject(err);

            resolve(salt);
        })
    });

    let hash = await new Promise(function (resolve, reject) {
        bcrypt.hash(password, salt, null, function (err, hash) {
            if (err) reject(err);

            resolve(hash);
        })
    });

    try {
        user = await User.create({
            login,
            password: hash,
            email,
        });
        if (!user) throw {};
    } catch (e) {
        next(e);
    }

    token = await secure.generateToken(user._id);
    let result = {
        "status": "OK",
        "code": 0,
        "res": "" !== token,
    };

    console.log(`New user registered: ${login}`);

    res.cookie('token', token);
    res.setHeader('content-type', 'application/json');
    res.json(result);
};

module.exports = signUp;