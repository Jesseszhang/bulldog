const shelljs = require('shelljs')
shelljs.env.NODE_ENV = 'production'

module.exports = function ({ appName }) {
  const path = require('path')
  const config = require('./config')
  const ora = require('ora')
  const webpack = require('webpack')

  const webpackConfig = require('./config/prod.webpack.conf')({
    appName: appName
  })

  var spinner = ora('building for production...')
  spinner.start()

  var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
  shelljs.rm('-rf', assetsPath)
  shelljs.mkdir('-p', assetsPath)

  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  })
}