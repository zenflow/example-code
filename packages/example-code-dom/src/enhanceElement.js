export function enhanceElement(element) {
  if (String(element.tagName).toUpperCase() !== 'CODE') {
    throw new TypeError('element must be a <code> element')
  }
  element.classList.contains('executable') &&
    element.classList.contains('js') &&
    executableJs(element)
}

function executableJs(element) {
  const code = element.dataset.compiledCode || element.innerHTML

  element.prepend(
    Object.assign(document.createElement('button'), {
      innerHTML: '▶',
      style: 'float: right',
      onclick() {
        eval(code) // eslint-disable-line no-eval
      },
    }),
  )
}
