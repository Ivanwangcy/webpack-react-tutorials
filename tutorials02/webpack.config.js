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
  }
};
