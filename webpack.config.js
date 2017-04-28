/*
    ./webpack.config.js
*/
const path = require('path');
var buildPath = path.resolve(__dirname, 'public', 'build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: buildPath,
    filename: 'app.js',
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 7700,
  },
  externals: {
    'cheerio': 'window',
      'react/addons': 'react',
      'react/lib/ExecutionEnvironment': 'react',
      'react/lib/ReactContext': 'react',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.useable\.css$/,
        use: [
          {
            loader: "style-loader/useable"
          },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader?mimetype=image/png"
          },
        ],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
          }
        ],
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
          },
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader?limit=8192'
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json'
          },
        ],
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig]
}
