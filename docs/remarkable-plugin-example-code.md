---
id: remarkable-plugin-example-code
title: remarkable-plugin-example-code
---

> `remarkable` plugin to apply `example-code-compile`

## Usage

Use just like any other remarkable plugin. Options are passed directly to [example-code-compile](./example-code-compile.html).

```js
const remarkablePluginExampleCode = require('remarkable-plugin-example-code')
const Remarkable = require('remarkable')

const md = new Remarkable()
  .use(remarkablePluginExampleCode, { /* options for example-code-compile */ })

console.log(md.render(`\
# An example code block
\`\`\`js executable
const [foo, bar] = ['foo', 'bar']
\`\`\`)
`)
```
