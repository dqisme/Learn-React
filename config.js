var path = require('path');
var config = {
  appMountId: 'app',
  path: {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
  }
};

module.exports = config;
