var getConfig = require('hjs-webpack');

var NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);
module.exports = getConfig({
  in: 'src/app.js',
  out: 'build',
  clearBeforeBuild: true,
  isDev: true,
  devServer: {
    // port, // pulled from top level option "port"
    hostname: '0.0.0.0', // // pulled from top level option "hostname"
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true, // enable express compression to faster index reload (default: false)
    // The following options are for webpack-dev-middleware
    noInfo: true,
    quiet: false,
    lazy: false,
    // publicPath // pulled from top level option "output.publicPath"
  }
});
