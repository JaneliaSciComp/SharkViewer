const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production', // loads uglifyjsplugin
  devtool: 'source-map',
});
