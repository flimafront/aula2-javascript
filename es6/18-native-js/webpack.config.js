var webpack = require('webpack');

module.exports = {
	entry: {
		filename: './app.js'
	},
	output: {
		filename: 'build.js'
	},
	// idenfifica melhor os erros
	//devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						['es2015', {module: false}]
					]
				}
			}
		]
	}
}