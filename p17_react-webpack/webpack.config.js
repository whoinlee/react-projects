const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    //-- compiled into here
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      {
        //-- js or jsx
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      //-- creates index.html file
      template: "./src/index.html",
    }),
  ],
};
