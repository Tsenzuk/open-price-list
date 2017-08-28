const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HASH_LENGTH = 10;

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('public/'),
    publicPath: '../',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['env'],
      //     },
      //   },
      // },
      {
  			test: /((?!font).)*\.(jpg|png|gif|svg).*?$/,
  			loader: ['file-loader?name=images/[name].[hash:' + HASH_LENGTH + '].[ext]'],
  		},
  		{
  			test: /font.*?\.(eot|woff|woff2|ttf|svg).*?$/,
  			loader: ['file-loader?name=fonts/[name].[hash:' + HASH_LENGTH + '].[ext]'],
  		},
  		{
  			test: /\.css$/,
  			loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
  		},
		]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin('css/[name].css'),
  ],
};