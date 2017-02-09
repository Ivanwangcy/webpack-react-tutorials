# webpack-react-tutorials
webpack和react tutorials 练习代码


可以安装webpack-dev-server来测代码。
```bash
$ npm install --save-dev webpack@latest webpack-dev-server@latest babel-core babel-loader babel-preset-{es2015,react,stage-0}
$ npm install --save-dev {css,style,url,file}-loader
```
* [wbpack tutorials 01 打包js文件和css文件配置文件](./tutorials01/webpack.config.js)
* [wbpack tutorials 02 多js文件打包合并，ES6转换](./tutorials02/webpack.config.js)
* [wbpack tutorials 03 webpack-react-babel 打包](./tutorials03/webpack.config.js)
* [wbpack tutorials 04 图片打包，小于8192 转换base64](./tutorials04/webpack.config.js)
* [wbpack tutorials 05 使用bundle-loader延迟加载其他模块](./tutorials05/webpack.config.js)
* [wbpack tutorials 06 使用ES6语法创建React对象, 热部署自动加载模块](./tutorials06/webpack.config.js)
* [wbpack tutorials 07 html-webpack-plugin插件使用](./tutorials07/webpack.config.js)

## [webpack tutorials 08 使用 `hjs-webpack` 简化 webpack.config.js 配置项](./tutorials08/webpack.config.js)
hjs-webpack 安装与部署：
```sh
$ npm i -D hjs-webpack {css,style,postcss}-loader
# 打包
$ webpack # 与使用 webpack 一样

# 启动测试服务器 本地安装
$ ./node_modules/.bin/hjs-dev-server

# 全局安装
$ npm i -g hjs-webpack
$ NODE_ENV=development hjs-dev-server # 启动服务器 默认端口 3000
```
## [webpack tutorials 09 使用Redux 管理 React 状态](./tutorials09/)
```sh
```
