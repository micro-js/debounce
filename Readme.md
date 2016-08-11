
# debounce

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Debounce a function

## Installation

    $ npm install @f/debounce

## Usage

Debounce takes a function and a time in milliseconds and returns a function that, once called, will not run until `time` milliseconds have elapsed and will drop all subsequent calls in the interim period. This is useful if you have an event that might happen many times in a short period but that you only want to respond to once after they have all stopped, e.g.

```js
var debounce = require('@f/debounce')
window.addEventListener('resize', debounce(relayout))
```

## API

### debounce(fn, time)

- `fn` - The function you want to debounce
- `time` - The time in milliseconds. Defaults to 0.

**Returns:** A debounced version of `fn`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/debounce.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/debounce
[git-image]: https://img.shields.io/github/tag/micro-js/debounce.svg?style=flat-square
[git-url]: https://github.com/micro-js/debounce
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/debounce.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/debounce
