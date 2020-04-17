import path from 'path';
import { Configuration } from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const DIST_PATH = path.resolve(process.cwd(), 'dist');

const config: Configuration = {
  entry: './src/index',
  output: {
    path: DIST_PATH,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: path.join(DIST_PATH, 'images/[name].[contenthash].[ext]'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public/index.html'),
      filename: path.join(DIST_PATH, 'index.html'),
      inject: true,
    }),
  ],
};

export default config;
