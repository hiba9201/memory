const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/game.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000,
        
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
        ],
      },
}