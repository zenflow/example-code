const { parseFragment, serialize } = require('parse5')
const { transform } = require('babel-core')
const { walk, getTextContent } = require('./util')

const defaultBabelConfig = { presets: [['babel-preset-env']] }

function compile({ html, babel = defaultBabelConfig }) {
  const fragment = parseFragment(html)
  walk(fragment, element => {
    if (element.tagName === 'code') {
      const classes = element.attrs
        .find(({ name }) => name === 'class')
        .value.split(' ')
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
