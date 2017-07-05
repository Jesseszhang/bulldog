var path = require('path');

module.exports = {
  global: {
    root: '../../',
    appDir: '../../app/'
  },
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../example/dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../../example/dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 80,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/**/api/**' : 'http://localhost:8888'
    },
    cssSourceMap: false
  },
  sourceMap: false
}
