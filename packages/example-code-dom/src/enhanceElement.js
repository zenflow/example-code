const globalEval = eval // eslint-disable-line no-eval

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

  const buttonElement = Object.assign(document.createElement('button'), {
    innerHTML: '▶',
    className: executeButtonClass,
    onclick() {
      globalEval(code)
    },
  })
  buttonElement.style.float = 'right'

  prepend(buttonElement, element)
}

function prepend(element, parent) {
  return parent.insertBefore(element, parent.firstChild)
}
