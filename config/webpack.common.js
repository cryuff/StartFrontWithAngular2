var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    'polyfills': './app/polyfills.ts',
    'app': './app/main.ts',
    'vendor': './app/vendor.ts',
    'lib': './app/lib.ts'
  },

  output: {
    path: __dirname,
    filename: './dist/[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  module: {
    loaders: [{
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills', 'lib']
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
};
