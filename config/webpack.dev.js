const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const PORT = 5500;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port: PORT,
    inline: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.s?(a|c)ss$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader'],
      },
    ],
  },
});
