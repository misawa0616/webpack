const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    devtool: 'node',
    entry: {app: './src/js/app.js',
            sub: './src/js/sub.js'
    },
    output: {
    	path: path.resolve(__dirname, 'public'),
    	filename: './js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
    ],
}
