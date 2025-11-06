const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: 'images/[name][ext]', // keep image names
    },
    devServer: {
      static: './dist',
      open: true,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
        minify: isProd
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/images', to: 'images' }],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          use: ['html-loader'],
        },
      ],
    },
    devtool: isProd ? false : 'source-map',
  };
};
