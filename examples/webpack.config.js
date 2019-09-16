const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'main.js')
  ],

  output: {
    path: path.join(__dirname, '__build__'),
    publicPath: '/__build__/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      'react-mobile-picker': path.join(__dirname, '..', 'src')
    }
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
