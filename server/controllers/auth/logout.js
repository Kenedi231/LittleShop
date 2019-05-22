const logOut = async function (req, res, next) {
    res.cookie('token', '');
    res.setHeader('content-type', 'application/json');
    res.json({
        "status": "ok",
        "code": 0,
    })
};

module.exports = logOut;