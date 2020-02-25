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
      {from: './src/demos', to: 'demos'},
      {from: './src/css', to: 'css'},
      {from: './src/one-page', to: 'one-page'},
      {from: './src/style.css', to: 'style.css'},
      {from: './src/images', to: 'images'},
      {from: './src/js', to: 'js'},
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
    ,
    new HtmlWebpackPlugin({
      template: './src/demo_k5Asi84kks8u1sl9dah1AS8AS7aSDa.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'demo_k5Asi84kks8u1sl9dah1AS8AS7aSDa.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/curso-de-git-avanzado-presencial.hbs',
        inject: true,
        chunks: ['index'],
        filename: 'curso-de-git-avanzado-presencial.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/curso-de-git-avanzado-a-distancia.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'curso-de-git-avanzado-a-distancia.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/sobre-nosotros.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'sobre-nosotros.html'
    }),
    new HtmlWebpackPlugin({
          template: './src/contacto.hbs',
          inject: true,
          chunks: ['index'],
          filename: 'contacto.html'
    }),
    new HtmlWebpackPlugin({
          template: './src/politica-privacidad-proteccion-de-datos.hbs',
          inject: true,
          chunks: ['index'],
          filename: 'politica-privacidad-proteccion-de-datos.html'
    })
  ]
};