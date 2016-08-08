'use strict';

const path              = require('path');
const autoprefixer      = require('autoprefixer');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const del               = require('del');
process.env.NODE_ENV    = 'production';

del(['dist']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});

module.exports = {
  entry: {
    'react-libs': ['./lib/libs.js']
  },
  output: {
    library: 'react-libs',
    libraryTarget: "umd",
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
    // chunkFilename: "[name].[hash].js"
  },
  externals: {
    'react': 'react',
    'react-addons-shallow-compare': 'react-addons-shallow-compare',
    'react-dom': 'react-dom'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      // 將 Environment Variables - 環境變數傳入
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('react-libs.css')
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?name=[path][name].[ext]',
          'img?minimize&optimizationLevel=5&progressive=true'
        ]
      }, {
        test: /\.json$/,
        loaders: ['json']
      }, {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
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
