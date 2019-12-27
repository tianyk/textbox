const path = require('path');
const camelCase = require('camelcase');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');
const COMPONENT_NAME = camelCase(pkg.name, { pascalCase: true });

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: `${pkg.name}.js`,
		library: COMPONENT_NAME,
		// libraryExport: 'default',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx)$/,
				exclude: /node_modules/,
				include: [
					path.resolve(__dirname, './src'),
					/@simonwep\/pickr/
				],
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(tsx|ts)?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[name][hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
		alias: {
			'@assets': path.resolve(__dirname, 'assets'),
			'@commons': path.resolve(__dirname, 'src/commons')
		}
	},
	target: 'web',
	// 插件
	plugins: [
		new BundleAnalyzerPlugin({
			generateStatsFile: true,
			analyzerMode: 'static',
			openAnalyzer: false
		}),
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			COMPONENT_NAME: JSON.stringify(COMPONENT_NAME),
			VERSION: JSON.stringify(pkg.version)
		}),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			inject: 'body',
			COMPONENT_NAME: COMPONENT_NAME
		})
	],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		'prop-types': 'PropTypes',
		'medium-editor': 'MediumEditor'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		open: true,
		compress: true,
		port: 9999,
		writeToDisk: true
	}
}