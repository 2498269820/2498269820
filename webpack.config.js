const path = require("path");//node模块的函数

module.exports = {
  entry: "./src/js/index.js", //设置入口
  output: {//设置出口
    path: path.resolve(__dirname, "./dist"), //node模块的函数path.resolve
    filename: "bundle.js",//设置打包后的文件名
  },

  module: {
    rules: [
      {
        test: /\.css$/,//  \=转译只匹配. .不转译可被匹配到其他字符 $=文件结尾    
        // loader:'css-loader'//loader语法糖写法
        use: [//完整写法
          // {loader:'css-loader',opticon:''//可传递额外的参数}//一般直接如下面写即可
          //loader执行顺序从下往上
          'style-loader',
          'css-loader',
          // 'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", 'less-loader', 'postcss-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }
        ],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: 'file-loader',
      //   type:'javascript/auto'
      //   // type: 'asset/resource'
      // }, 

      // {
      //   test: /\.(css|less)$/,  //合并写法
      //   use: ["style-loader", "css-loader", 'less-loader'],
      // },

    ]
  }
};
