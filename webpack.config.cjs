 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {

    mode: 'production',

    entry: './src/scripts.js',

    output:{
        filename: 'dist.js',
        path:path.resolve(__dirname, 'docs'),
        clean: true,
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module:{
        rules:[  {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
    ]
    },

     devtool: 'eval-source-map',
    devServer: {
       hot:true
    }
 };