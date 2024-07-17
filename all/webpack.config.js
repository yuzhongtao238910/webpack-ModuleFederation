const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
/// npm i webpack-dev-server html-webpack-plugin webpack react react-dom webpack-cli babel-loader @babel/preset-react -D
module.exports = {
	mode: 'development',
	devtool: false,
	entry: './src/index.js',
	output: {
		// publicPath: 'http://localhost:8000',
	},
	devServer: {
		port: 8001,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederationPlugin({
			name: 'host',
			// 向主机提供服务的文件名字
			// filename: 'remoteEntry.js',
			// 输出的模块名字 被远程引用的路径是 ${name}/${expose}
			// name: 'host', // 最后会变成全局变量 作为一个远程容器，向外界提供服务，本质上是通过一个全局变量
			// 远程引用的应用的名字以及别名的映射，使用的时候使用key的值作为映射
			remotes: {
				app1: 'remote@http://localhost:3000/remoteEntry.js',
				app2: 'host@http://localhost:8000/hostEntry.js',
			},
			// exposes: {
			// 	'./Host': './src/Host',
			// },
			// filename: 'all.js',
			// name: 'all',
			shared: {
				react: '^18.3.1',
				// {
				// 	singleton: true,
				// 	// 		requiredVersion: '18.3.1',
				// },
				'react-dom': '^18.3.1',
				// {
				// 	singleton: true,
				// 	// 		requiredVersion: '18.3.1',
				// },
			},
		}),
	],
}
