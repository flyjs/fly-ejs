<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [ejs](https://github.com/mde/ejs) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][appveyor-badge]][appveyor-link]
[![][climate-badge]][climate-link]
[![][david-badge]][david-link]
[![][david-dev-badge]][david-dev-link]


## Getting Started
This plugin requires [fly](https://github.com/flyjs/fly).

```sh
$ npm i fly-ejs -D
```

## Usage examples

```js
module.exports = {
  *ejs(fly) {
    yield fly.source('./**/*.ejs')
      .ejs({ key: 'value' })
      .target('./dist')
  }
}
```

## License
MIT License

[mit]:             http://opensource.org/licenses/MIT
[author]:          https://github.com/pine
[fly]:             https://www.github.com/flyjs/fly
[fly-badge]:       https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:       https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]:    https://www.npmjs.org/package/fly-ejs
[npm-ver-link]:    https://img.shields.io/npm/v/fly-ejs.svg?style=flat-square
[travis-link]:     https://travis-ci.org/flyjs/fly-ejs
[travis-badge]:    http://img.shields.io/travis/flyjs/fly-ejs.svg?style=flat-square
[appveyor-link]:   https://ci.appveyor.com/project/pine/fly-ejs/branch/master
[appveyor-badge]:  https://img.shields.io/appveyor/ci/pine/fly-ejs/master.svg?style=flat-square
[david-link]:      https://david-dm.org/flyjs/fly-ejs
[david-badge]:     https://img.shields.io/david/flyjs/fly-ejs.svg?style=flat-square
[david-dev-link]:  https://david-dm.org/flyjs/fly-ejs#info=devDependencies&view=table
[david-dev-badge]: https://img.shields.io/david/dev/flyjs/fly-ejs.svg?style=flat-square
[climate-link]:    https://codeclimate.com/github/flyjs/fly-ejs
[climate-badge]:   https://img.shields.io/codeclimate/github/flyjs/fly-ejs.svg?style=flat-square
