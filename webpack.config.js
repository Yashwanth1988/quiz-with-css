const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "styles.css"
});


module.exports = {

    entry : './src/index.js',
    output : {
        path : path.join(__dirname, '/dist'),
        publicPath: '/dist/',
        filename : 'bundle.js',

    },
    devtool: 'eval-source-map',

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env", "@babel/preset-react"] }
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader:  "eslint-loader"
          },
          {
            test: /\.(css|less)$/,
            use: extractSass.extract({
              fallback : 'style-loader',
              use : [
                { loader: "css-loader" },
                { loader: "less-loader" }
              ]
            })  
            //["style-loader", "css-loader"]
          }
        ],

        
      },

      plugins : [
        extractSass
      ],

    resolve: { extensions: ["*", ".js", ".jsx"] },


}
