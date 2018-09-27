const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = () => ({
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
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
            presets: ['@babel/env'],
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
    new HotModuleReplacementPlugin(),
  ],
});
