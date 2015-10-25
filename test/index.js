const expect = require('chai').expect
const co = require('co')
const fs = require('co-fs')
const ejs = require('../')

describe('index', () => {
  it('# succeeded', done => {
    co(function* () {
      const data = yield fs.readFile(`${__dirname}/fixture/ok.ejs`)
      const expected = yield fs.readFile(`${__dirname}/fixture/ok.html`)

      ejs.call({
        filter: function (name, transform) {
          try {
            const actual = transform(data, { title: 'fly-ejs' })
            expect(name).to.equal('ejs')
            expect(actual).to.deep.equal({ css: expected.toString(), ext: '.html' })
            done()
          }
          catch (e) { done(e) }
        }
      })
    })
  })

  it('# failed', done => {
    ejs.call({
      filter: function (name, transform) {
        try {
          const actual = transform('<%= invalid_variable %>', { title: 'fly-ejs' })
          done('should be failed because ejs data is broken')
        }
        catch (e) {
          console.log(e)
          done()
        }
      }
    })
  })
})
