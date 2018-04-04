/* eslint-env jest */

const compile = require('..')

describe('compile', () => {
  it('basic', async () => {
    const html = `\
<pre>
  <code class="executable js">let [foo, bar] = [1, 2]</code>
</pre>`
    const compiledHtml = compile({ html })
    expect(compiledHtml).toMatchSnapshot()
  })
})
