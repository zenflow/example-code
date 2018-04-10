export function enhanceElement(
  element,
  { executeButtonClass = 'execute' } = {},
) {
  if (String(element.tagName).toUpperCase() !== 'CODE') {
    throw new TypeError('element must be a <code> element')
  }
  element.classList.contains('executable') &&
    element.classList.contains('js') &&
    executableJs(element, executeButtonClass)
}

function executableJs(element, executeButtonClass) {
  const code = element.dataset.compiledCode || element.innerHTML

  element.prepend(
    Object.assign(document.createElement('button'), {
      innerHTML: '▶',
      classList: executeButtonClass,
      style: 'float: right',
      onclick() {
        eval(code) // eslint-disable-line no-eval
      },
    }),
  )
}
