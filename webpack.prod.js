const webpack = require('webpack');
const {merge} = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserWebpackPlugin = require("terser-webpack-plugin");
 const common = require('./webpack.common.js');
 module.exports = merge(common, {
    // devtool: 'source-map',
    plugins: [
      new TerserWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.HashedModuleIdsPlugin(),
      new BundleAnalyzerPlugin() // 包文件分析
    ],
    mode: 'production',
    optimization: {
      splitChunks: {
        // chunks: 'all',//块的范围，有三个可选值：initial/async动态异步加载/all全部块(推荐)，默认为async;
        // minChunks: 1, // 表示要被提取的模块最小被引用次数，引用次数超过或等于minChunks值，才能被提取。
        // maxAsyncRequests: 6, // 最大的按需(异步)加载次数，默认为 6。
        // maxInitialRequests: 4,// 打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件），默认为4。
        // automaticNameDelimiter: '~', // 默认情况下，webpack会使用块的来源和名称来生成名称(例如:vendor ~main.js)。此选项允许您指定要为生成的名称使用的分隔符。
        // name: 'vendor',
        cacheGroups: {//缓存组
          vendors: {
            name: `vendor`, // 对共同引用内容进行重命名，然后能覆盖外面的命名
            test: /[\\/]node_modules[\\/]/,  // 用来匹配要提取的模块的资源路径或名称。值是正则或函数。
            priority: -10, // 方案的优先级，值越大表示提取模块时优先采用此方案。默认值为0
            // reuseExistingChunk: true, // 为true时，如果当前要提取的模块，在已经在打包生成的js文件中存在，则将重用该模块，而不是把当前要提取的模块打包生成新的js文件。
            // enforce: true, // 为true时，忽略minSize，minChunks，maxAsyncRequests和maxInitialRequests外面选项
          }
        }
      }
    }
 });