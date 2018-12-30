const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// https://github.com/gajus/write-file-webpack-plugin
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  // https://github.com/gajus/write-file-webpack-plugin
  output: {
    path: path.join(__dirname, './dist')
  },

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {from: './src/css', to: 'css'},
      {from: './src/style.css', to: 'style.css'},
      {from: './src/images', to: 'images'},
      {from: './src/js', to: 'js'},
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/about.html',
        inject: true,
        chunks: ['index'],
        filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/contacts.html',
        inject: true,
        chunks: ['index'],
        filename: 'contacts.html'
    })
  ]
};

