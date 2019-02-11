const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // devtool: 'source-map',
  devServer: {
    contentBase: './lib',
  },
  externals: {
    three: 'THREE',
  },
  watch: false,
  entry: './src/shark_viewer.js',
  output: {
    filename: 'shark_viewer.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'sharkViewer'
  }
};
