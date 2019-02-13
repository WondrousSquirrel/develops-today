const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // if page looking bundle in another directory use publicPath
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true
  }
});
