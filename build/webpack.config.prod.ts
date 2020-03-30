import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import commonConfig from './webpack.config.common';

const publicPath = './';

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    publicPath,
    filename: 'scripts/[name].[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
  ],
};

export default merge(commonConfig, prodConfig);
