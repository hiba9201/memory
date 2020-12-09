const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HTMLplugin({
            template: 'src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/i,
                use: ['babel-loader'],
                exclude: [path.resolve(__dirname, 'server'), path.resolve(__dirname, 'node_modules')],
            },
        ],
    },
};
