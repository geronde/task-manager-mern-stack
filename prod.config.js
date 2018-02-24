//const devConfig = require('./webpack.config.js')
//const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



const config ={
devtool: 'cheap-module-source-map',


  entry: [
    'react-hot-loader/patch',
    './client/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath:'/'
    
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
              //query: { sourceMap: false },
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
                    loader: 'svg-url-loader?name=img/[name].[ext]',
                }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'

      }
    ]
  },

  plugins: [  
    //index.html custom template
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: './index.html',
      favicon: 'favicon.ico',
      
    }),

    //new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': process.env.NODE_ENV
    }
  }),

    //extract css files
    new ExtractTextPlugin({filename:"styles.css",disable:false,allChunks:true}),
    new UglifyJsPlugin({
      sourceMap: false,
      exclude: [/\.min\.js$/gi]
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
  ]
};

module.exports=config