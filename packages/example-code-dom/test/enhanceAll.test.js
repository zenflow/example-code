/* eslint-env jest */

const { enhanceAll } = require('../src/index')

describe('enhanceAll', () => {
  it('#01 basic', async () => {
    document.body.innerHTML = `<div>\
<code class="executable js">console.log('foo')</code>
<code class="js">console.log('foo')</code>\
<code class="executable">console.log('foo')</code>\
<section><code class="executable js">console.log('foo')</code></section>\
</div>`
    enhanceAll()
    const codeElements = document.querySelectorAll('code')
    expect(
      codeElements[0].previousElementSibling.querySelector('button'),
    ).toBeTruthy()
    expect(
      codeElements[1].previousElementSibling.querySelector('button'),
    ).toBeFalsy()
    expect(
      codeElements[2].previousElementSibling.querySelector('button'),
    ).toBeFalsy()
    expect(
      codeElements[3].previousElementSibling.querySelector('button'),
    ).toBeTruthy()
  })
})
