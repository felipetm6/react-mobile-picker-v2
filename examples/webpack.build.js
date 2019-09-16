const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'main.js')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[hash].app.js'
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
