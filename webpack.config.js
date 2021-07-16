const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // keeps names of bundles the same even if change entry point name

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    menu: './src/menu.js',
    about: './src/about.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'truffle + salt',
      myPageHeader: 'truffle + salt',
      // template: './src/index.html',
      // filename: './dist/index.html',
      // chunks: ['index'],
    }),
    // new HtmlWebpackPlugin({
    //   title: 'truffle + salt | menu',
    //   myPageHeader: 'truffle + salt',
    //   template: './src/index.html',
    //   chunks: ['menu'],
    //   filename: './dist/menu.html'
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'truffle + salt | about',
    //   myPageHeader: 'truffle + salt',
    //   template: './src/index.html',
    //   chunks: ['about'],
    //   filename: './dist/about.html'
    // }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // publicPath: '/',
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