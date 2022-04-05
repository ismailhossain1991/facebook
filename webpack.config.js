const path = require('path');
const Htmlwebpack = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    devServer : {
        static : {
            directory  : path.resolve(__dirname , 'bundle')
        },
        port : 3000,
        open : true,
        hot  : true,
        compress : true,
        historyApiFallback : true,
    
    },
    entry  :    path.resolve(__dirname , 'src/index.js'),
    output : {
        path  :     path.resolve(__dirname , 'bundle'),
        filename :      'bundle.js'
},
module :{
    rules : [
        {
            test : /\.js$/,
            exclude : /(node_modules)/,
            use : {
                loader  : 'babel-loader',
               options : {
                    presets : ['@babel/preset-env']
                }
            }
        },
        {
            test : /\.css$/,
            
            use : ['style-loader', 'css-loader']
        }
    ]
  },

plugins :  [
    new Htmlwebpack({
        title : 'react developer',
        filename : 'index.html',
        template : 'public/index.html'
    })
]



}