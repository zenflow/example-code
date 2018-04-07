# example-code

Enhance a &lt;code> element with an "execute" button and more

[![Build Status](https://travis-ci.org/zenflow/example-code.svg?branch=master)](https://travis-ci.org/zenflow/example-code)
[![Coverage Status](https://coveralls.io/repos/github/zenflow/example-code/badge.svg?branch=master)](https://coveralls.io/github/zenflow/example-code?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

Markdown blocks marked "executable" like this...

```
```js executable
const [foo, bar] = [5, 8]
alert(`${foo} ${bar}`)
``` `
```

get "execute" buttons like this...

```js executable
const [foo, bar] = [5, 8]
alert(`${foo} ${bar}`)
```

Code is compiled with babel for execution in browser.

---

For an example check out [the github pages website](https://zenflow.github.io/example-code/docs/intro.html).

[CHANGELOG](./CHANGELOG.md)
