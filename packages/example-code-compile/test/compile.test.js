/* eslint-env jest */

const compile = require('..')

const stripNewlines = str => str.replace(/\s*\n\s*/g, '')

describe('compile', () => {
  it('#01 basic', async () => {
    const compiledHtml = compile(
      `<pre><code class="executable js">let [foo, bar] = [1, 2]</code></pre>`,
    )
    expect(compiledHtml).toMatchSnapshot()
  })

  it('#02 only touches <code class="executable js"> elements', async () => {
    const originalHtml = stripNewlines(`<pre>
      <code class="js">let [foo, bar] = [1, 2]</code>
      <code class="executable">let [foo, bar] = [1, 2]</code>
      <code>let [foo, bar] = [1, 2]</code>
      <p class="executable js">let [foo, bar] = [1, 2]</p>
    </pre>`)
    const compiledHtml = compile(originalHtml)
    expect(compiledHtml).toEqual(originalHtml)
  })

  it('#03 accepts babel configuration', async () => {
    const compiledHtml = compile(
      `<code class="executable js">let [foo, bar] = [1, 2]</code>`,
      {
        babel: {
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
        },
      },
    )
    expect(compiledHtml).not.toEqual(expect.stringContaining('var')) // last Chrome version supports let/const
    expect(compiledHtml).toEqual(
      expect.stringContaining('&quot;use strict&quot;;'), // babel should still add "use strict"
    )
  })
})
