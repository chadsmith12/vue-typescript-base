const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CopyWebpackPlugin([
            {
              from: "src/lib/abp.js",
              to: "dist"
            }
          ])
        ]
      };
    } else {
      return {
        devtool: "source-map",
        plugins: [
          new CopyWebpackPlugin([
            {
              from: "src/lib/abp.js",
              to: "dist"
            }
          ])
        ]
      };
    }
  }
};
