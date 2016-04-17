var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude:/node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js')
  ]
};
