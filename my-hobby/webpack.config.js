const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/env"], 
          plugins: [require.resolve("react-refresh/babel")],
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      { 
        test: /\.(gif|png|jpe?g|)$/, 
        use: 'url-loader' 
      }, 
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};