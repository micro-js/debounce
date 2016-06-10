/**
 * Expose debounce
 */

module.exports = debounce

/**
 * Debounce
 */

function debounce (fn, time, leading) {
  var lead = false
  var pending = false

  return function () {
    if (!pending) {
      if (leading && !lead) {
        lead = true
        fn()
        return
      }

      pending = true
      setTimeout(run, time)
    }
  }

  function run () {
    lead = false
    pending = false
    fn()
  }
}
