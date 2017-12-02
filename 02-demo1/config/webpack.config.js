var webpack = require('webpack')
var path = require('path')

var CURRENT_PATH = path.resolve(__dirname)
var ROOT_PATH = path.join(__dirname, '../')
var START_PATH = path.join(ROOT_PATH, './src')
var APP_PATH = path.join(START_PATH, 'index')
var MODULES_PATH = path.join(ROOT_PATH, './node_modules')
var BUILD_PATH = path.join(ROOT_PATH, './build/pack')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'react-webpack.budle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [START_PATH],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
}
