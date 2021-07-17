const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    // menu: './src/menu.js',
    // about: './src/about.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },

  module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },

};