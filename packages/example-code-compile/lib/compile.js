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
        let value = getTextContent(element)
        if (babel) {
          value = transform(value, {
            babelrc: false,
            ...babel,
          }).code
        }
        element.attrs.push({
          name: 'data-compiled-code',
          value,
        })
      }
    }
  })
  return serialize(fragment)
}

module.exports = compile
