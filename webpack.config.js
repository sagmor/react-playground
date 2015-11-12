module.exports = {
  entry: "./app/boot.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
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
    root: [__dirname]
  }
}
