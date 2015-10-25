const ejs = require('ejs')

module.exports = function () {
  this.filter('ejs', (data, opts) => ejs.render(data.toString(), opts))
}
