const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const commonConfig = merge([{ entry: ["./app/index.jsx"], output: { path: path.resolve(__dirname, "build"), filename: "bundle.js" } }, parts.loadJavaScript(), parts.page()]);

const configs = {
  development: merge([]),
  production: merge([]),
};

module.exports = (_, argv) => {
  const mode = argv.mode;
  return merge([commonConfig, configs[mode], { mode }]);
};
