import styleInject from 'style-inject'
import styles from './styles'

let stylesInjected = false

const globalEval = eval // eslint-disable-line no-eval

export function enhanceElement(
  codeElement,
  { injectStyles, executeButtonClass = 'execute' } = {},
) {
  if (String(codeElement.tagName).toUpperCase() !== 'CODE') {
    throw new TypeError('element must be a <code> element')
  }

  if (injectStyles && !stylesInjected) {
    styleInject(styles)
    stylesInjected = true
  }

  codeElement.className += ' example-code'

  const buttonContainer = Object.assign(document.createElement('div'), {
    className: 'example-code-buttons',
  })

  if (
    codeElement.classList.contains('executable') &&
    codeElement.classList.contains('js')
  ) {
    buttonContainer.appendChild(
      createExecuteButton(codeElement, executeButtonClass),
    )
  }

  codeElement.parentElement.insertBefore(buttonContainer, codeElement)
}

function createExecuteButton(codeElement, executeButtonClass) {
  const code = codeElement.dataset.compiledCode || codeElement.innerHTML

  const buttonElement = Object.assign(document.createElement('button'), {
    className: executeButtonClass,
    onclick() {
      globalEval(code)
    },
  })

  buttonElement.appendChild(
    Object.assign(document.createElement('span'), {
      className: 'icon',
      innerHTML: '▶',
    }),
  )
  buttonElement.appendChild(
    Object.assign(document.createElement('span'), {
      className: 'label',
      innerHTML: ' execute',
    }),
  )

  return buttonElement
}
