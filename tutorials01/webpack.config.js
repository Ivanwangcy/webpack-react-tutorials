module.exports = {
  entry: './entry.js', // 源文件
  output: {
    filename: 'bundle.js' // 输出文件
  },
  module: {
    loaders: [
      {
        test:/\.css$/,
        loader: "style!css" // 用!去链式调用loader
      }
    ]
  }
};
