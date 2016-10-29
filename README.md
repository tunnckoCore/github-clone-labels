# [github-clone-labels][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Cloning labels from source repository to destination repository. Period.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i github-clone-labels --save
```

or use it as **CLI**

```sh
$ npm i github-clone-labels --global
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const githubCloneLabels = require('github-clone-labels')
```

## CLI Usage

```
$ github-clone-labels --help
$ github-clone-labels tunnckoCore/gruu node-minibase/minibase --token 89s7df9h34jkbkjas
```

## API

### [githubCloneLabels](index.js#L41)
> Clone labels of `opts.src` repository to some `opts.dest` repository. Pattern is `username/repo`. You also can provide `opts.token` for auth.

**Params**

* `<opts>` **{Object}**    
* `<cb>` **{Function}**    

**Example**

```js
var clone = require('github-clone-labels')

clone({
  src: 'tunnckoCore/gruu',
  dest: 'node-minibase/minibase',
  token: '...'
}, function done (err, res) {
  if (err) return console.error(err.stack)

  console.log(res)
  // => array of created labels at `opts.dest`
})
```

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with… [more](https://github.com/node-base/base) | [homepage](https://github.com/node-base/base "base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.")
- [github-base](https://www.npmjs.com/package/github-base): JavaScript wrapper that greatly simplifies working with GitHub's API. | [homepage](https://github.com/jonschlinkert/github-base "JavaScript wrapper that greatly simplifies working with GitHub's API.")
- [in-array](https://www.npmjs.com/package/in-array): Return true if a value exists in an array. Faster than using indexOf and won't blow… [more](https://github.com/jonschlinkert/in-array) | [homepage](https://github.com/jonschlinkert/in-array "Return true if a value exists in an array. Faster than using indexOf and won't blow up on null values.")
- [is-async-function](https://www.npmjs.com/package/is-async-function): Is function really asynchronous function? Trying to guess that based on check if [common-callback-names][] exists as… [more](https://github.com/tunnckocore/is-async-function#readme) | [homepage](https://github.com/tunnckocore/is-async-function#readme "Is function really asynchronous function? Trying to guess that based on check if [common-callback-names][] exists as function arguments names or you can pass your custom.")
- [is-installed](https://www.npmjs.com/package/is-installed): Checks that given package is installed on the system - globally or locally. | [homepage](https://github.com/tunnckoCore/is-installed#readme "Checks that given package is installed on the system - globally or locally.")
- [is-missing](https://www.npmjs.com/package/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as user repository. | [homepage](https://github.com/tunnckocore/is-missing#readme "Check that given `name` or `user/repo` exists in npm registry or in github as user repository.")
- [isarray](https://www.npmjs.com/package/isarray): Array#isArray for older browsers | [homepage](https://github.com/juliangruber/isarray "Array#isArray for older browsers")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/github-clone-labels/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[common-callback-names]: https://github.com/tunnckocore/common-callback-names
[in-array]: https://github.com/jonschlinkert/in-array

[npmjs-url]: https://www.npmjs.com/package/github-clone-labels
[npmjs-img]: https://img.shields.io/npm/v/github-clone-labels.svg?label=github-clone-labels

[license-url]: https://github.com/tunnckoCore/github-clone-labels/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/github-clone-labels.svg

[downloads-url]: https://www.npmjs.com/package/github-clone-labels
[downloads-img]: https://img.shields.io/npm/dm/github-clone-labels.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/github-clone-labels
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/github-clone-labels.svg

[travis-url]: https://travis-ci.org/tunnckoCore/github-clone-labels
[travis-img]: https://img.shields.io/travis/tunnckoCore/github-clone-labels/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/github-clone-labels
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/github-clone-labels.svg

[david-url]: https://david-dm.org/tunnckoCore/github-clone-labels
[david-img]: https://img.shields.io/david/tunnckoCore/github-clone-labels.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

