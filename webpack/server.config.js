const path = require('path');

module.exports = {
    target: 'node',
    entry: './server/app.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'public'),
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    devServer: {
        port: 3000,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ],
                        presets: [
                            ['env', {
                                'targets': {
                                    'node': 'current',
                                }
                            }]
                        ],
                    }
                },
            },
        ],
    },
}