const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Apis: path.resolve(__dirname, "src/api")
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
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new webpack.optimize.UglifyJsPlugin() //minify everything
  ]
  // devtool: 'eval-source-map'
}
