const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolvePath } = require('./resolvePath');

module.exports = {
  entry: resolvePath('src/index.tsx'),
  output: {
    path: resolvePath('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@ui': resolvePath('src/ui'),
      '@theme': resolvePath('src/ui/theme'),
      '@features': resolvePath('src/features'),
      '@pages': resolvePath('src/pages'),
      '@lib': resolvePath('src/lib')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebPackPlugin({
      template: resolvePath('public/index.html')
    })
  ]
};
