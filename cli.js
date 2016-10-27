#!/usr/bin/env node

'use strict'

var clone = require('./index')
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    s: 'src',
    d: 'dest',
    t: 'token'
  }
})

clone({
  src: argv.src || argv._[0],
  dest: argv.dest || argv._[1],
  token: argv.token || argv._[2]
}, function done (err, res) {
  if (err) {
    console.error(err)
    console.error(err.data)
    process.exit(1)
    return
  }
  console.log(res)
  console.log('Copied without problems!')
})
