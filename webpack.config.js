var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
        entry: {
            bundle: [
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
                path.resolve(__dirname, 'app/entry.js')
            ],
            vendors: 'jquery'
        },
        resolve: {
            alias: {
                'jquery': nodeModulesPath + '/jquery/dist/jquery.js'
            }
        },
        output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    module: {
        loaders: [
        {
            test: /.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'app')
        },
        {
            test: require.resolve("jquery"),
            loader: "expose?jQuery"
        }]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;