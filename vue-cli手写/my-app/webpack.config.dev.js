/*
 * @Author: LHN
 * @Date: 2020-09-22 15:01:50
 * @LastEditTime: 2020-09-22 21:08:14
 * @LastEditors: LHN
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli手写\my-app\webpack.config.dev.js
 */
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test:/\.css$|.styl$|.stylus$/,
        use:[
          // 当前的环境 MiniCssExtractPlugin 在热更新下可能会失效
          process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader'
      }
    ],
  },

  plugins: [
    // 确保插件引入
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: path.resolve(__dirname,'./index.html')
    }),
    new MiniCssExtractPlugin({
      filename:'index.css',
      allChunks: true,
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 8000,
    open: true,
    hot: true,
  },
};
