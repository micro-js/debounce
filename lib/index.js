/**
 * Expose debounce
 */

module.exports = debounce

/**
 * Debounce
 */

function debounce (fn, time) {
  var pending = false

  return function () {
    if (!pending) {
      pending = true
      setTimeout(run, time)
    }
  }

  function run () {
    pending = false
    fn()
  }
}
