const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const prod = process.env.NODE_ENV === "production";
const webpack = require("webpack");

module.exports = {
  mode: prod ? "production" : "development",
  devtool: prod ? "hidden-source-map" : "eval",

  entry: "./src/index.tsx",

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, "public/"),
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: "http://localhost:3000/dist/",
  },
};
