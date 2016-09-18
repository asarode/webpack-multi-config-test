module.exports = {
  name: 'config-2',
  entry: './src/index.js',
  output: {
    filename: 'bundle-2.js'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }
}
