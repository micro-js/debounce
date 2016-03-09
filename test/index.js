/**
 * Imports
 */

var debounce = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  function fn () { t.pass() }
  const debounced = debounce(fn)

  debounced()
  debounced()
  debounced()
  t.plan(1)
})
