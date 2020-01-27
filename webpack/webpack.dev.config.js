const path = require('path');

const parentDir = path.join(__dirname, '../');
const srcDir = path.join(parentDir, 'src');

module.exports = {
  entry: [
    path.join(srcDir, 'index.js'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // npm install --save-dev style-loader css-loader less-loader less
      // {
      //   test: /\.less$/,
      //   loaders: ["style-loader", "css-loder", "less-loader"]
      // }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: `${parentDir}/dist`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};
