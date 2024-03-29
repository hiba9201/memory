require('core-js/stable');
require('regenerator-runtime/runtime');

const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

let config;
if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    config = require('../webpack/webpack.server.config');
}

const router = require('./router/router');

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler));
}
app.use(express.static(path.join(__dirname, '/')));
app.use(parser.json());
app.use(morgan('combined'));

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    next(err);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
