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

test('recursive calling should be ok with leading debounce', function (t) {
  var n = 0
  var running = false
  function fn () {
    if (running) return debounced()
    running = true
    if (n === 0) debounced()
    n++;
    running = false
  }

  var debounced = debounce(fn, 0, true)

  debounced()
  t.equal(n, 1)

  setTimeout(function () {
    t.equal(n, 2)
    t.end()
  })
})
