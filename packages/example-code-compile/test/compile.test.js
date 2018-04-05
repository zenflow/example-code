/* eslint-env jest */

const compile = require('..')

const stripNewlines = str => str.replace(/\s*\n\s*/g, '')

describe('compile', () => {
  it('#01 basic', async () => {
    const html = stripNewlines(`
<pre>
  <code class="executable js">let [foo, bar] = [1, 2]</code>
</pre>`)
    const compiledHtml = compile({ html })
    expect(compiledHtml).toMatchSnapshot()
  })

  it('#02 only touches <code class="executable js"> elements', async () => {
    const html = stripNewlines(`
<pre>
  <code class="js">let [foo, bar] = [1, 2]</code>
  <code class="executable">let [foo, bar] = [1, 2]</code>
  <code>let [foo, bar] = [1, 2]</code>
  <p class="executable js">let [foo, bar] = [1, 2]</p>
</pre>`)
    const compiledHtml = compile({ html })
    expect(compiledHtml).toEqual(html)
  })

  it('#03 accepts babel configuration', async () => {
    const html = stripNewlines(`
<pre>
  <code class="executable js">let [foo, bar] = [1, 2]</code>
</pre>`)
    const babel = {
      presets: [
        [
          require.resolve('babel-preset-env'),
          {
            targets: {
              browsers: ['last 1 Chrome version'],
            },
          },
        ],
      ],
    }
    const compiledHtml = compile({ html, babel })
    expect(compiledHtml).not.toEqual(expect.stringContaining('var')) // last Chrome version supports let/const
    expect(compiledHtml).toEqual(
      expect.stringContaining('&quot;use strict&quot;;'), // babel should still add "use strict"
    )
  })
})
