var path = require('path');
var getConfig = require('hjs-webpack');

var NODE_ENV = process.env.NODE_ENV;
console.log(getConfig());
module.exports = getConfig({
  devtool: 'cheap-module-eval-source-map',
  in: [
    'webpack-hot-middleware/client',
    './index'
  ],
  out: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static'
  },
  clearBeforeBuild: true,
  isDev: true,
  // devServer: {
  //   // port, // pulled from top level option "port"
  //   hostname: '0.0.0.0', // // pulled from top level option "hostname"
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   compress: true, // enable express compression to faster index reload (default: false)
  //   // The following options are for webpack-dev-middleware
  //   noInfo: true,
  //   quiet: false,
  //   lazy: false,
  //   // publicPath // pulled from top level option "output.publicPath"
  // }
});
