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

test('leading should work', function (t) {
  var n = 0
  function fn () { n++ }
  var debounced = debounce(fn, 0, true)

  debounced()
  debounced()
  debounced()
  t.equal(n, 1)

  setTimeout(function () {
    t.equal(n, 2)
    debounced()
    debounced()
    t.equal(n, 3)

    t.end()
  }, 1)
})
