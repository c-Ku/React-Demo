'use strict'

const React = require('react')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: __dirname + '/src/index.tsx',
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.scss', '.css'],
  },

  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(css|sass|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    port: 2333,
    historyApiFallback: true,
    inline: true,
    contentBase: './dist',
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
