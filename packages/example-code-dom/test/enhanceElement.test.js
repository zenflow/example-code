/* eslint-env jest */

const { enhanceElement } = require('../src/index')

const getCodeElement = () => {
  const element = Object.assign(document.createElement('code'), {
    className: 'executable js',
    innerHTML: 'window.callback()',
  })
  document.body.appendChild(element)
  return element
}

const destroyCodeElement = element => {
  document.body.removeChild(element)
}

describe('enhanceElement', () => {
  it('#01 snapshot', async () => {
    const codeElement = getCodeElement()

    expect(document.body).toMatchSnapshot()
    enhanceElement(codeElement)
    expect(document.body).toMatchSnapshot()

    destroyCodeElement(codeElement)
  })

  it('#02 throws when called on non-code elements', async () => {
    expect(() => enhanceElement(document.createElement('div'))).toThrowError()
  })

  it('#03 clicking button executes code', async () => {
    const codeElement = getCodeElement()
    enhanceElement(codeElement)

    let callbackCalled = false
    window.callback = () => {
      callbackCalled = true
    }

    codeElement.previousElementSibling.querySelector('button').click()

    expect(callbackCalled).toEqual(true)

    destroyCodeElement(codeElement)
  })

  it('#04 takes a `executeButtonClass` option', async () => {
    const codeElement = getCodeElement()
    enhanceElement(codeElement, { executeButtonClass: 'my-execute' })
    const button = codeElement.previousElementSibling.querySelector('button')
    expect(String(button.classList)).toEqual('my-execute')
    destroyCodeElement(codeElement)
  })

  it('#05 takes a `injectStyles` option', async () => {
    const codeElement = getCodeElement()
    const styleElementsBefore = document.head.querySelectorAll('style')
    expect(styleElementsBefore.length).toEqual(0)
    enhanceElement(codeElement, { injectStyles: true })
    const styleElementsAfter = document.head.querySelectorAll('style')
    expect(styleElementsAfter.length).toEqual(1)
    expect(styleElementsAfter[0].innerHTML).toEqual(require('../src/styles'))
    destroyCodeElement(codeElement)
  })
})
