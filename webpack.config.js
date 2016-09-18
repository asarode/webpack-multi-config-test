var config1 = {
  name: 'config-1',
  entry: './src/index.js',
  output: {
    filename: 'bundle-1.js'
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

var config2 = {
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

module.exports = [config1, config2]
