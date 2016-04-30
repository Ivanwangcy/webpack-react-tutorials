var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var htmlTemplatePath = path.resolve(ROOT_PATH, 'src', 'assets', 'templates', 'index-template.ejs');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  // 添加生成HTML文件的插件
  plugins: [
    new htmlWebpackPlugin({
      title: 'Hello World webpack app',
      filename: 'index.html',
      template: htmlTemplatePath,
      inject: false
    })
  ]
};
