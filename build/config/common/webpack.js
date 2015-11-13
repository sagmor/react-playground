var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ROOT = path.resolve(__dirname, '../../..');

module.exports = {
  context: ROOT,
  entry: "./app/config/boot.jsx",
  output: {
    filename: "bundle.js",
    path: ROOT + "/build",
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel?presets[]=es2015&presets[]=react"]
      },
      {
        test: /\.html$/,
        loader: "file",
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [ROOT]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/config/index.html',
      inject: 'body'
    })
  ]

}
