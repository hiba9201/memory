const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './app.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            [require('@babel/plugin-proposal-class-properties')],
                        ],
                        presets: ['@babel/preset-env']
                    }
                },
            },
        ],
    },
}