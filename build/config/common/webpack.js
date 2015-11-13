var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT = __dirname + '/../../..';

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
        loader: "babel",
        query:
        {
          presets:['es2015','react']
        }
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
