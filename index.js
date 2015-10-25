const ejs = require('ejs')

module.exports = function () {
  this.filter('ejs', (data, opts) => ({
    css: ejs.render(data.toString(), opts),
    ext: '.html'
  }))
}
