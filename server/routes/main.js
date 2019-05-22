const express = require('express');
const path = require('path');

const router = express.Router();

const index = path.join(__dirname, "../../public/index.html");

router.get('*', function (req, res) {
    if (req.cookies.token === undefined) {
        res.cookie('token', '');
    }
    res.sendFile(index);
});

module.exports = router;