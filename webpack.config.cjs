const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'vyzor.bundle.js': [path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '/index.html')
    }),
    new miniCssExtractPlugin({
      filename: 'style.min.css'
    })
  ],
  optimization: {},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      //Add XML loader
      // {
      //   test: /\.xml$/,
      //   use: [
      //     "xml-loader"
      //   ]
      // }
    ]
  },
  devServer: {
    hot: false,
    compress: false,
    static: {
      directory: path.join(__dirname, ''),
    },
    port: 9000,
  },
};
