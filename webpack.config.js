'use strict';

var path              = require('path');
var autoprefixer      = require('autoprefixer');
var webpack           = require('webpack');
process.env.NODE_ENV = 'production';

module.exports = {
  entry: {
    'libs': ['./lib/libs.js']
  },
  output: {
    libraryTarget: "umd",
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
    // chunkFilename: "[name].[hash].js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      // 將 Environment Variables - 環境變數傳入
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: [ path.join(__dirname, 'lib') ],
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['babel-plugin-transform-decorators-legacy'],
          env: {
            development: {
              presets: ['react-hmre']
            }
          }
        }
      }, {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?name=[path][name].[ext]',
          'img?minimize&optimizationLevel=5&progressive=true'
        ]
      }, {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'lib'
    ],
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.ts', '.tsx']
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
