const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HTMLplugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/i,
                use: ["babel-loader"],
            },
        ],
    },
}