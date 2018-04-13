---
id: index
title: Introduction
---

## What is "example-code"?

`example-code` is a set of modules and a system to help you easily add some helpful and impressive enhancements to the code blocks in your documentation sites **and work in all the browsers**.

Example:

```js executable
(async () => {
  const res = await fetch('https://api.ipify.org?format=json')
  const { ip } = JSON.parse(await res.text())
  alert(`Your IP: ${ip}`)
})()
```

The above code should execute in all environments, despite the es-next syntax. (Go ahead, try it in IE).

Polyfills must be loaded for this to work:

 - [babel-polyfill](https://unpkg.com/babel-polyfill@6/browser.js)
 - polyfills for whatever browser APIs you rely on, e.g. in this example I needed a [polyfill for fetch](https://unpkg.com/whatwg-fetch@2)

## Packages

There are two main packages in this monorepo project:

- [example-code-dom](./example-code-dom.html), the browser library for enhancing `<code>` elements
- [example-code-compile](./example-code-compile.html), optional, a node module for preprocessing your example code for execution in browsers

There are two packages that are adapters for `example-code-compile`:

- [remarkable-plugin-example-code](./remarkable-plugin-example-code.html), plugin for [remarkable](https://github.com/jonschlinkert/remarkable)
- [example-code-cli](./example-code-cli.html), command line interface *note: I hesitate to even include this in documentation since it's largely incomplete*
