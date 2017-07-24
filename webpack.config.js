const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  performance: {
    hints: false
  },

  resolve: {
    alias: {
      'core': path.resolve(__dirname, './src/core')
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.jsx', '.js']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: 'file-loader' },
      { test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './src/core/asset/style/')]
            }
          }]
      },
      { test: /\.js(x)?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'MOBX', template: './src/index.ejs' })
  ]
}
