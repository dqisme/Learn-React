var webpackConfig = {
  entry: "./src/index.js",
  output: {
    path: "./build/",
    filename: "index.compiled.js"
  },
  module: {
    loaders: [
      { test:/\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};

module.exports = webpackConfig;
