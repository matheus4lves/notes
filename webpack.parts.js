const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.page = () => ({
  plugins: [new HtmlWebpackPlugin()],
});

exports.loadJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // https://babeljs.io/docs/presets#preset-options
            presets: [["@babel/preset-env", { targets: "defaults" }], ["@babel/preset-react"]],
          },
        },
      },
    ],
  },
  /* resolve: {
    extensions: [".js", ".jsx"], // Use if you don't want to write file extensions when importing/requiring
  }, */
});
