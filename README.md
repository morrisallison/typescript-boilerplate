# [![typescript-boilerplate][logo]][homepage]

[logo]: https://cldup.com/PyYZbgDH5I.svg
[homepage]: https://github.com/morrisallison/typescript-boilerplate

A boilerplate for TypeScript packages.

[![MIT License][badge-license]][license]
[![Travis CI Build Status][badge-travis]][travis]
[![Codecov Coverage Status][badge-codecov]][codecov]
[![Dependencies Status][badge-dependencies]][bithound]
[![DevDependencies Status][badge-dependencies-dev]][bithound]

[badge-codecov]: https://img.shields.io/codecov/c/github/morrisallison/typescript-boilerplate.svg?style=flat-square
[badge-dependencies]: https://img.shields.io/bithound/dependencies/github/morrisallison/typescript-boilerplate.svg?style=flat-square
[badge-dependencies-dev]: https://img.shields.io/bithound/devDependencies/github/morrisallison/typescript-boilerplate.svg?style=flat-square
[badge-license]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[badge-travis]: https://img.shields.io/travis/morrisallison/typescript-boilerplate.svg?style=flat-square
[bithound]: https://bithound.io/github/morrisallison/typescript-boilerplate
[codecov]: https://codecov.io/gh/morrisallison/typescript-boilerplate
[license]: https://github.com/morrisallison/typescript-boilerplate/raw/master/LICENSE
[travis]: https://travis-ci.org/morrisallison/typescript-boilerplate

## Features

* Build ES5, ES6, and jsNext modules with sourcemaps using [Rollup][]
* Track code coverage using [nyc][] and [Codecov][codecov-site]
* Run unit tests without bundling using [TypeScript Node][]
* Iron out the kinks with [TSLint][]
* Relax with a stable and reliable test suite using [Tap][], [jsdom][], and [Must.js][]

[codecov-site]: https://codecov.io
[jsdom]: https://github.com/tmpvar/jsdom
[Must.js]: https://github.com/moll/js-must
[nyc]: https://github.com/istanbuljs/nyc
[Rollup]: https://github.com/rollup/rollup
[Tap]: http://www.node-tap.org/
[Travis CI]: https://travis-ci.org/
[TSLint]: https://github.com/palantir/tslint
[TypeScript Node]: https://github.com/TypeStrong/ts-node
[TypeScript]: https://github.com/Microsoft/TypeScript

## Getting Started

You can start using the boilerplate by either:

#### Downloading the source

Downloads are available on the [releases][] page.

[releases]: https://github.com/morrisallison/typescript-boilerplate/releases

#### Cloning the git repo

```
git clone https://github.com/morrisallison/typescript-boilerplate.git
```

## Usage

The boilerplate comes with several Yarn scripts located in the [`package.json`][packagejson].

[packagejson]: ./package.json

| Command                | Description                         |
| ---------------------- | -------------------                 |
| `npm test`             | Runs the test suite                 |
| `npm run build`        | Builds all of the distributed files |

## License

Copyright &copy; 2017 [Morris Allison III](http://morris.xyz).
<br>Released under the [MIT license](./LICENSE).
