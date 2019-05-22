const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const configWebpack = require('../webpack.config.dev');

const userRouter = require('./routes/user');
const mainRouter = require('./routes/main');
const itemRouter = require('./routes/item');
const errorHandler = require('./middlewares/errorHandler');
const config = require('../config');

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(configWebpack);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: configWebpack.output.publicPath
    }));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Mongo connected");
});

app.use(express.static(path.join(__dirname, "../public")));

app.use('/user', userRouter);
app.use('/item', itemRouter);
app.use(mainRouter);

http.listen(config.port, function () {
    console.log('Shop app listening on http://localhost:' + config.port + '/\n');
});

app.use(errorHandler);