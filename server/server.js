const express = require('express');
const app = express();
const http = require('http').Server(app);

const config = require('../config');

http.listen(config.port, function () {
    console.log('Shop app listening on http://localhost:' + config.port + '/\n');
});