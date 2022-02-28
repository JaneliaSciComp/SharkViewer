const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // devtool: 'source-map',
  devServer: {
    static: './lib',
    open: true
  },
  externals: {
    three: 'THREE',
  },
  entry: './src/shark_viewer.js',
  output: {
    filename: 'shark_viewer.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'sharkViewer'
  }
};
