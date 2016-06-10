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
        fn()
        lead = true
        return
      }

      pending = true
      setTimeout(run, time)
    }
  }

  function run () {
    console.log('run')
    lead = false
    pending = false
    fn()
  }
}
