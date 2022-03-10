const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ruleForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
}; 
const rulesForHtml = {
  test: /\.html$/,
  use: {
    loader: "html-loader",
  },
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      ruleForJavaScript,
      rulesForHtml,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ], 
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    open: true,
    port: 3009,
    compress: true,
    historyApiFallback: true,
  },
}