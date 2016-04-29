var webpack = require('webpack');
var config = require('./config');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: path.join(config.path.src, "index.js"),
  output: {
    path: config.path.build,
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  devServer: {
    contentBase: config.path.build
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      //html-webpack-template-config
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',
      appMountId: config.appMountId,
      baseHref: '',
      mobile: true,
      window: {
      }
    })
  ]
};

module.exports = webpackConfig;
