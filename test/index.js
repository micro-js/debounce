/**
 * Imports
 */

var debounce = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var n = 0
  function fn () { n++ }
  var debounced = debounce(fn)

  debounced()
  debounced()
  debounced()

  setTimeout(function () {
    t.equal(n, 1)
    t.end()
  })
})

test('should debounce properly', function (t) {
  var n = 0

  function fn () { n++ }

  var debounced = debounce(fn, 1000)

  debounced()
  setTimeout(debounced, 100)
  setTimeout(debounced, 200)
  setTimeout(debounced, 300)
  setTimeout(() => {
    t.equal(n, 1)
    debounced()
    setTimeout(() => {
      t.equal(n, 2)
      t.end()
    }, 1000)
  }, 1500)
})
