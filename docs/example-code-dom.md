---
id: example-code-dom
title: example-code-dom
---

> Impressive enhancements for code blocks in your documentation site

If you haven't already, read the [Introduction](./index.html)

## Functions

### enhanceAll([options])

Calls [enhanceElement](#enhanceelementelement-options) with the given options on every `<code>` element in the document.

### enhanceElement(element[, options])

Applies all of the [documented enhancements](#enhancements) to the given `<code>` element.

`element` must be a `<code>` element or an error will be thrown.

#### Options

- `executeButtonClass` - a className to give the "execute" button, default: `'executable'`

## Enhancements

### Executable

This is the main attraction. Code blocks that opt-in with the `executable` class get an "▶ execute" button that does just that: executes the example code.

If a `data-compiled-code` attribute is present on the `<code>` element (as can be added by [example-code-compile](./example-code-compile.html)), that is the code used for execution, otherwise the code to execute is extracted from the element's inner content.
