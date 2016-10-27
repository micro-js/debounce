/**
 * Expose debounce
 */

module.exports = debounce

/**
 * Debounce
 */

function debounce (fn, time) {
  var pending = null

  return function () {
    if (pending) clearTimeout(pending)
    pending = setTimeout(run, time)

    return function () {
      clearTimeout(pending)
      pending = null
    }
  }

  function run () {
    pending = null
    fn()
  }
}
