// https://webpack.js.org/concepts/
const path = require('path');

// https://webpack.js.org/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.s[ac]ss$/i,
        test: /\.css$/i,
        use: [
          'style-loader', 
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader',], 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new MiniCssExtractPlugin({
    filename: 'my-styles.css'}),
],
  devServer: {
    port: 4444,
    // clientLogLevel: 'error',
    open: true,
    stats: 'errors-only',
  },
};