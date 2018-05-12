const merge = require('webpack-merge')
const common = require('./webpack.config.js')

const paths = require('./paths')

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyjsWebpackPlugin(),
    new CleanWebpackPlugin(['dist'], { root: paths.app })
  ]
})