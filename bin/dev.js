#!/usr/bin/env node

const nodeArgv = process.argv
const optimist = require("optimist")

const argv = optimist.argv

console.log(argv.app)

if (!argv.app) {
  console.warn('argv app must alive')

  return false;
}

require('../build/dev')({
  appName: argv.app
})