var path = require('path')
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/src',

  entry: {
    index: __dirname + '/src/index.jsx'
  },
  output: {
    path: __dirname + '/public/js',
    publicPath: '/js/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!raw-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ]
  },
  devtool: 'source-map',
  resolve: {
    root: [
      path.join(__dirname, './src')
    ],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [],
  watch: ['./src/**/*'],
  watchOptions: {
    aggregateTimeout: 500
  }
};
