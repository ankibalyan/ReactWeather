const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      Components: path.resolve(__dirname, "src/components")
    }
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
