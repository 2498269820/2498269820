const path = require("path");

module.exports = {
  entry: "./src/js/index.js", //设置入口
  output: {
    path: path.resolve(__dirname, "./dist"), //设置出口
    filename: "bundle.js",//设置打包后的文件名
  },
};
