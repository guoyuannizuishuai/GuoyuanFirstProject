const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
    // another: './src/another.js'
    vendor: [
      'lodash'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 新的语法更新
    new HtmlWebpackPlugin({
        title: 'Caching'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.chunk.js',
    publicPath: '/'
  },
  
};