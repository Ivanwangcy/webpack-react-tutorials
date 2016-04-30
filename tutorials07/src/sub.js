function generateText() {
  var element = document.createElement("h2");
  element.innerHTML = "标题二, 这是一个htmlWebpackPlugin示例, 根据ejs模板生成html文件";
  return element;
}

module.exports = generateText;
