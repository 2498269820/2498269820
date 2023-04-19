const path = require("path");//node模块的函数

module.exports = {
  entry: "./src/js/index.js", //设置入口
  output: {//设置出口
    path: path.resolve(__dirname, "./dist"), //node模块的函数path.resolve
    filename: "bundle.js",//设置打包后的文件名
  },
};
