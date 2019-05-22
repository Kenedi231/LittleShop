const secure = require('../../utils/secure');
const User = require('../../models/user');

const signIn = async function(req, res, next) {
    let {login, password} = req.body;
    let token;
    let user = await User.findOne({login});
    if (user) {
        if (await user.checkPassword(password)) {
            token = await secure.generateToken(user._id);
        } else {
            token = "";
        }
    } else {
        token = "";
    }
    let result = {
        "status": "ok",
        "code": 0,
        "res": "" !== token,
    };

    res.cookie("token", token);
    res.setHeader('content-type', 'application/json');
    res.json(result);
};

module.exports = signIn;