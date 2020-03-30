import { Configuration, HotModuleReplacementPlugin, SourceMapDevToolPlugin } from 'webpack';
import merge from 'webpack-merge';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import commonConfig, { DIST_PATH } from './webpack.config.common';

const publicPath = '/';

const devConfig: Configuration & DevServerConfiguration = {
  mode: 'development',
  output: {
    publicPath,
    filename: 'scripts/[name].js',
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: 'sourcemaps/[file].map',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: 'localhost',
    contentBase: DIST_PATH,
    port: 3000,
    open: true,
    historyApiFallback: true,
    stats: 'minimal',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

const config = merge(commonConfig, devConfig);

export default config;
