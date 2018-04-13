---
id: example-code-compile
title: example-code-compile
---

> Preprocess your example code for execution in browsers, works with `example-code-dom`

*Note: Ideally you don't want to use this package directly; you want to use some kind of adaptor that fits with your build pipeline, like [remarkable-plugin-example-code](https://zenflow.github.io/example-code/docs/remarkable-plugin-example-code.html) or [example-code-cli](https://zenflow.github.io/example-code/docs/example-code-cli.html)*

This function will search through your HTML, compile the content of `<code class="executable js">` elements, and attach the results as a `data-compiled-code` attribute for later execution in the browser. The element's inner content is not changed.

## Example

```js
const exampleCodeCompile = require('example-code-compile')

const source = `\
<h1>An example code block</h1>
<code class="js executable">
  const [foo, bar] = ['foo', 'bar']
</code>`

const compiled = exampleCodeCompile(source, { /* ...options */ })

console.log(compiled)
```

Output:

```html
<h1>An example code block</h1>
<code class="js executable" data-compiled-code="'use strict';

var foo = 'foo',
    bar = 'bar';">
  const [foo, bar] = ['foo', 'bar']
</code>
```

## Options

- `babel`: Custom babel configuration for Babel version 6 (default is `{ presets: ['babel-preset-env'] }`)
