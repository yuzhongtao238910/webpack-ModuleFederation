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
		// publicPath: 'http://localhost:3000',
	},
	devServer: {
		port: 3000,
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
			// 向主机提供服务的文件名字
			filename: 'remoteEntry.js',
			// 输出的模块名字 被远程引用的路径是 ${name}/${expose}
			name: 'remote', // 最后会变成全局变量 作为一个远程容器，向外界提供服务，本质上是通过一个全局变量
			exposes: {
				// 被远程引用的时候可以暴露的资源路径以及别名
				// 必须是相对路径
				'./NewsList': './src/NewsList',
			},
			shared: {
				react: {
					// 		singleton: true,
					// 		requiredVersion: '18.3.1', // React的版本
					eager: true,
				},
				'react-dom': {
					// 		singleton: true,
					// 		requiredVersion: '18.3.1',
					eager: true,
				},
			},
		}),
	],
}
