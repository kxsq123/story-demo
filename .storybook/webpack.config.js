/**
 * Created by daizengyu on 2019/3/26.
 */
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        include: [path.resolve(__dirname, '../stories')],
        enforce: 'pre'
      },
      {
        test: /\.(woff2?|eot|woff|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  }
};
