/*!
 * github-clone-labels <https://github.com/tunnckoCore/github-clone-labels>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var assert = require('assert')
var ctrl = require('async')
var get = require('simple-get')

module.exports = function githubCloneLabels (opts, cb) {
  assert.strictEqual(opts && typeof opts, 'object', 'expect `src` to be a object')
  assert.strictEqual(typeof cb, 'function', 'expect `cb` to be a function')

  var api = 'https://api.github.com/repos'
  var headers = {
    'user-agent': 'https://github.com/tunnckoCore/github-clone-labels',
    authorization: opts.token ? `token ${opts.token}` : opts.auth
  }

  get.concat({
    json: true,
    headers: headers,
    url: `${api}/${opts.src}/labels`
  }, function callback (e, res, data) {
    if (res.statusCode !== 200) {
      var val = ' ' + res.statusCode
      cb(new Error(data.message + val))
      return
    }

    ctrl.mapSeries(data, function (label, next) {
      get.concat({
        method: 'POST',
        json: true,
        headers: headers,
        url: `${api}/${opts.dest}/labels`,
        body: label
      }, function (er, response, json) {
        if (response.statusCode !== 201) {
          next(new Error(json.message + ' ' + response.statusCode))
          return
        }
        next(null, json, response)
      })
    }, cb)
  })
}
