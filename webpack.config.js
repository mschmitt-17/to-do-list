const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { isNullOrUndefined } = require('util');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gig)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer',
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: './src',
    },
};