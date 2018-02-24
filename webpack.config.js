const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  devtool: 'cheap-module-source-map',


  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './client/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './js/app.bundle.js',
    publicPath: "/"
  },


  devServer: {

    contentBase: path.join(__dirname, 'build'),
    port: 9000,
    hot: true,
    compress: true,
    historyApiFallback: true

  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]

        })
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpe?g|gif|ico|\.woff$|\.ttf$|\.wav$|\.mp3$)$/i,
        use: ['file-loader?name=img/[name].[ext]',
          'image-webpack-loader']

      },
      {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=css/fonts/[name].[ext]'

      }
    ]
  },

  plugins: [

   new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': process.env.NODE_ENV
    }
  }),
   
    // enable hot module reloading (HMR) globally
    new webpack.HotModuleReplacementPlugin(),

    //index.html custom template
    new HtmlWebpackPlugin({
      title: 'Welcome',
      template: './index.html',
      favicon: 'favicon.ico'
    }),

    //extract css files
    new ExtractTextPlugin("styles.css")
  ],
}