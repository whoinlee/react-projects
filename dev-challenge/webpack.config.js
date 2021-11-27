const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const NODE_ENV = process.env
const __DEV__ = NODE_ENV !== 'production'

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'client'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        options: {
          plugins: [
            'transform-object-rest-spread'
          ],
          presets: [
            ['es2015', { modules: false }],
            'react'
          ]
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 8192
        }
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          'name': '[name].[ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          'name': 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(ico)$/,
        loader: 'file-loader',
        options: {
          'name': '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          require('postcss-simple-vars'),
          require('postcss-nested'),
          require('autoprefixer')
        ]
      }
    })
  ]
}
