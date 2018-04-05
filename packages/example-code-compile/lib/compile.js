const { parseFragment, serialize } = require('parse5')
const { transform } = require('babel-core')
const { walk, getTextContent } = require('./util')

const defaultBabelConfig = {
  presets: [[require.resolve('babel-preset-env')]],
}

function compile({ html, babel = defaultBabelConfig }) {
  const fragment = parseFragment(html)
  walk(fragment, element => {
    if (element.tagName === 'code') {
      const classAttr = element.attrs.find(({ name }) => name === 'class')
      const classes = classAttr ? classAttr.value.split(' ') : []
      if (classes.includes('executable') && classes.includes('js')) {
        let code = getTextContent(element)
        if (babel) {
          code = transform(code, {
            babelrc: false,
            ...babel,
          }).code
        }
        element.attrs.push({
          name: 'data-compiled-code',
          value: code,
        })
      }
    }
  })
  return serialize(fragment)
}

module.exports = compile
