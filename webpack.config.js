const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HASH_LENGTH = 10;

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('public/'),
    publicPath: './',
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
    //   {
  		// 	test: /((?!font).)*\.(jpg|png|gif|svg).*?$/,
  		// 	loader: ['file-loader?name=[name].[hash:' + HASH_LENGTH + '].[ext]&publicPath=../images/'],
  		// },
  		{
  			test: /font.*?\.(eot|woff|woff2|ttf|svg).*?$/,
  			use: [
  			  {
  			    loader: 'file-loader',
  			    options: {
  			      name: 'fonts/[name].[hash:' + HASH_LENGTH + '].[ext]',
  			      publicPath: '../',
  			    }
  			  },
			  ],
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