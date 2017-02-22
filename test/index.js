const join = require('path').join

const co = require('co')
const expect = require('chai').expect
const Fly = require('fly')
const fs = require('mz/fs')
const tmp = require('tmp')

const ejs = require('../')

describe('index', () => {
  it('# succeeded', (done) => {
    tmp.dir((err, out) =>  {
      if (err) { return done(err) }

      const fly = new Fly({
        plugins: [ ejs ],
        tasks: {
          *foo(f) {
            yield f
              .source(join(__dirname, 'fixture/ok.ejs'))
              .ejs({ title: 'fly-ejs' })
              .target(out)
          },
        },
      })

      fly.start('foo')
        .then(co.wrap(function* () {
          const expected = yield fs.readFile(join(__dirname, 'fixture/ok.html'))
          const actual = yield fs.readFile(join(out, 'ok.html'))
          expect(actual).to.deep.equal(expected)
          done()
        }))
        .catch(err => done(err))
    })
  })

  it('# failed', (done) => {
    const fly = new Fly({
      plugins: [ ejs ],
      tasks: {
        *foo(f) {
          yield f
            .source(join(__dirname, 'fixture/ok.ejs'))
            .ejs( /* arguments required! */ )
        },
      },
    })

    fly.start('foo')
      .then(() => done('should be failed because ejs data is broken'))
      .catch(err => done())
  })
})
