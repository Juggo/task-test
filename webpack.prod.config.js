const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:["react", "es2015", "stage-0"]
        }
      }, 
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader",
        include: path.join(__dirname, 'src') }
    ]
  }
}