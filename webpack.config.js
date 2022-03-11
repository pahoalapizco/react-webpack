const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
const ruleForCss = {
  test: /\.s[ac]ss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
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
      ruleForCss,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
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