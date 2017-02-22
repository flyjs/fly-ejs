exports.test = function *(fly) {
  yield fly.source('./test/*.js').mocha({ reporter: 'spec' })
}
