'use strict'

const path = require('path')
const React = require('react')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: false,                          // 使用 'source-map' 会生成map文件
  entry: {
    index: [
      './src/index.tsx',
    ],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.less', '.scss', '.css'],
  },

  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(css|less)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },

  devServer: {
    port: 2333,
    inline: true,
    noInfo: true,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash:3].css'),
  ],
}
