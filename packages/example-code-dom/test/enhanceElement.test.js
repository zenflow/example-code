/* eslint-env jest */

const { enhanceElement } = require('../src/index')

const getCodeElement = () => {
  return Object.assign(document.createElement('code'), {
    className: 'executable js',
    innerHTML: 'window.callback()',
  })
}

describe('enhanceElement', () => {
  it('#01 snapshot', async () => {
    const codeElement = getCodeElement()

    expect(codeElement).toMatchSnapshot()
    enhanceElement(codeElement)
    expect(codeElement).toMatchSnapshot()
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

    codeElement.querySelector('button').click()

    expect(callbackCalled).toEqual(true)
  })

  it('#04 takes a executeButtonClass option', async () => {
    const codeElement = getCodeElement()
    enhanceElement(codeElement, { executeButtonClass: 'my-execute' })
    const button = codeElement.querySelector('button')
    expect(String(button.classList)).toEqual('my-execute')
  })
})
