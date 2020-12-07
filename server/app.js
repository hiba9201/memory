const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config');

const router = require('./router/router');

const app = express();
const port = 8080;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(parser.json());
app.use(morgan('combined'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(router);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    next(err);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})