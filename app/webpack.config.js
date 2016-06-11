var webpack = require("webpack"); 
var path = require("path");
//"webpack/hot/dev-server",
module.exports = {
	entry : {
		main: [ "./src/main.js"] 
	},
	output : {
		path : path.join(__dirname, "./dist"),
		filename : "bundle.js",
		publicPath : "/dist/"
	},
	module : {
		loaders : [
			{test : /\.js$/, loader : "babel-loader",exclude : /node_modules/},
			{test : /\.vue$/, loader : "vue-loader"}
		],
	},
	// .vue的配置。需要单独出来配置
	vue : {
		loaders : {
			js : "babel",
			css: 'style!css!autoprefixer'
		}
	},
	 // 转化成es5的语法
	babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
	plugins : [],
	 // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    devtool: 'eval-source-map'
}