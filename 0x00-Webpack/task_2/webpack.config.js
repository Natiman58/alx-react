const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js",
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            type: 'asset/resource',
          },
        ],
      },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};
