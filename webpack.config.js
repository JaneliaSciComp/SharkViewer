const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');


const cleanPlugin = new CleanWebpackPlugin(['test']);

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: false,
  entry: './test-src/index.js',
  output: {
    path: path.resolve(__dirname, 'test')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'test-src/index.html'
    }),
    cleanPlugin
  ]
};
