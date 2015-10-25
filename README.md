<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [ejs](https://github.com/tj/ejs) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][climate-badge]][climate-link]
[![][david-badge]][david-link]
[![][david-dev-badge]][david-dev-link]


## Getting Started
This plugin requires [fly](https://github.com/bucaran/fly).

```sh
$ npm i fly-vimlint -D
```

## Usage examples

```js
export default function* () {
  yield this.source('./**/*.ejs')
    .ejs()
    .target('./dist')
}
```

## License
MIT License<br />
Copyright (c) 2015 Pine Mizune

[mit]:             http://opensource.org/licenses/MIT
[author]:          https://github.com/pine613
[contributors]:    https://github.com/kashiro/fly-ejs/graphs/contributors
[fly]:             https://www.github.com/flyjs/fly
[fly-badge]:       https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:       https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]:    https://www.npmjs.org/package/fly-ejs
[npm-ver-link]:    https://img.shields.io/npm/v/fly-ejs.svg?style=flat-square
[travis-link]:     https://travis-ci.org/pine613/fly-ejs
[travis-badge]:    http://img.shields.io/travis/pine613/fly-ejs.svg?style=flat-square
[david-link]:      https://david-dm.org/pine613/fly-ejs
[david-badge]:     https://img.shields.io/david/pine613/fly-ejs.svg?style=flat-square
[david-dev-link]:  https://david-dm.org/pine613/fly-ejs#info=devDependencies&view=table
[david-dev-badge]: https://img.shields.io/david/dev/pine613/fly-ejs.svg?style=flat-square
[climate-link]:    https://codeclimate.com/github/pine613/fly-ejs
[climate-badge]:   https://img.shields.io/codeclimate/github/pine613/fly-ejs.svg?style=flat-square
