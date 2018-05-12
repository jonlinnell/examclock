const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

const paths = require('./paths')

module.exports = {
  entry: paths.src + '/index.js',
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: paths.src + '/index.html'
    }),
    new extractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000,outputPath=fonts/',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?outputPath=fonts/'
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader?outputPath=images/'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    tls: 'empty',
    net: 'empty',
    fs: 'empty'
  }
}
