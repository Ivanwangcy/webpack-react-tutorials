var webpack = require('webpack');

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: './entry.jsx',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test:/\.css$/,
        loader: 'style!css' // 用!去链式调用loader
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  }
};
