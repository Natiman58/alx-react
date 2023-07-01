const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
      header: ['./modules/header/header.js'],
      body: ['./modules/body/body.js'],
      footer: ['./modules/footer/footer.js'],
    },


    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name].bundle.js",
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
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
            chunks: ['header', 'body', 'footer'],
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8564,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](jquery|lodash)[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devtool: 'inline-source-map',
};
