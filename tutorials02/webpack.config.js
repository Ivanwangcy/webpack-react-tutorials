module.exports = {
//  多个文档，单独打包
  // entry: {
  //   bundle1: './entry1.js',
  //   bundle2: './entry2.js'
  // },
  // output: {
  //   filename: '[name].js'
  // }

  // 多个文件合并打包
  entry: [
    './entry1.js',
    './entry2.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_modules)/,
        loader: 'babel',
        // 配置文件.babelrc 替代下面属性
        // query: {
        //   presets: ['es2015'],
        //   plugins: ['transform-runtime']
        // }
      }
    ]
  },
  resolve: {
    // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', 'js', 'json']
  }
};
