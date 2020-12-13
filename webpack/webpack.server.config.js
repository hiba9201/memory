const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './server/app.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, '../public'),
        libraryTarget: 'commonjs2',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-class-properties'],
                        presets: ['@babel/preset-env'],
                    },
                },
                exclude: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
            },
        ],
    },
};
