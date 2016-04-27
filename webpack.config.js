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
      // Required
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',

      // Optional
      appMountId: 'app',
      baseHref: '',
      devServer: 3000,
      mobile: true,
      window: {
      }

      // and any other config options from html-webpack-plugin
      // https://github.com/ampedandwired/html-webpack-plugin#configuration
    })
  ]
};

module.exports = webpackConfig;
