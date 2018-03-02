const webpack = require('webpack');

module.exports = {//注意这里是exports不是export
	devtool: '#cheap-module-eval-source-map',
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname,//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
    module: {
        //loaders加载器
        rules: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            },{
                test: /\.(css|less)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },{
                test: /\.(ico|png|gif|jpg|jpeg)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: './',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8091,//设置默认监听端口，如果省略，默认为"8080"
        historyApiFallback: true, 
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin()
    ]
};