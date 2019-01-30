const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./pack.base');

/**
 * webpack配置
 * https://webpack.js.org/configuration/#options
 */
const devConfig = merge(baseConfig, {
    /**
     * 模式
     * https://webpack.js.org/concepts/mode/
     */
    mode: 'development',

    /**
     * 调试工具
     * https://webpack.js.org/configuration/devtool/
     */
    devtool: 'inline-source-map',

    /**
     * 开发服务配置
     * https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        host: 'localhost',
        port: '8088'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, '../dll', 'vendor-manifest.json'))
        })
    ]
});
module.exports = devConfig;
