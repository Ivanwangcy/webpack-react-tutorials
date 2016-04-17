var webpack = require('webpack');

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})
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
    }),
    devFlagPlugin
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
        loader: 'url?limit=8192&name=images/[hash:6].[ext]'
      }
    ]
  }
};
