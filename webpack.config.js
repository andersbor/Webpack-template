/*
  A webpack configuration file designed
  for webdevelopment with typescript and scss
  by Ebbe Vang, evang.dk and Anders Børjesson, anbo-easj.dk
*/

const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
 
module.exports = {
  // which files should webpack watch and transpile
  entry: ['./src/index.htm',  './src/js/index.ts'],
  module: {
    // rules webpack should follow when watching...
    rules: [
    {
        //TypeScipt files will be handles (transpiled) by the typescript-loader
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    },
    {
      // html files will be copied to the dist folder
      test: /.htm(l*)/,
      use:
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    },

    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    publicPath: '/dist/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  devtool: 'source-map',
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      reload: true,
      port: 3000,
      files: ["*.htm", "*.html"],
      index: 'index.htm',
      server: { baseDir: ['dist'] }
    })
  ]
};