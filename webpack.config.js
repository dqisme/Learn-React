var webpack = require('webpack');
var config = require('./config/config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: "./src/index.js",
  output: {
    path: "./build/",
    filename: "index.js"
  },
  module: {
    loaders: [
      { test:/\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',
      appMountId: config.appMountId,
      baseHref: '',
      devServer: 3000,
      mobile: true,
      window: {
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

module.exports = webpackConfig;
