const ejs = require('ejs')
const extname = require('path').extname

module.exports = (fly) => {
  fly.plugin('ejs', { every: true }, function* (file, opts) {
    opts = opts || {}

    const ext = extname(file.base)
    file.base = file.base.replace(new RegExp(`${ext}$`, 'i'), '.html')

    const out = ejs.render(file.data.toString(), opts)
    file.data = typeof Buffer.from === 'function' ?
      Buffer.from(out) : new Buffer(out)
  })
}
