const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HASH_LENGTH = 10;

module.exports = () => ({
  entry: './src/index.jsx',
  output: {
    path: path.resolve('public/'),
    publicPath: './',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /((?!font).)*\.(jpg|png|gif|svg).*?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: `images/[name].[hash:${HASH_LENGTH}].[ext]`,
            publicPath: '../',
          },
        },
      },
      {
        test: /font.*?\.(eot|woff|woff2|ttf|svg).*?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `fonts/[name].[hash:${HASH_LENGTH}].[ext]`,
              publicPath: '../',
            },
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
    ],
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [
      '.js',
      '.json',
      '.jsx',
    ],
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    host: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      inject: 'body',
    }),
    new ExtractTextPlugin('css/[name].css'),
  ],
});
