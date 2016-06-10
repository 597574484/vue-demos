module.exports = {
	entry : "./src/main.js",
	output : {
		path : "./dist",
		filename : "bundle.js"
	},
	module : {
		loaders : [
			{test : /\.js$/, loader : "babel-loader",exclude : /node_modules/},
			{test : /\.vue$/, loader : "vue-loader"}
		],
	},
	vue : {
		loaders : {
			js : "babel"
		}
	}
}