const React = require('react')

const siteConfig = require(process.cwd() + '/siteConfig.js')

const { baseUrl } = siteConfig

const scripts = [
  'https://unpkg.com/babel-polyfill@6/browser.js',
  'https://buttons.github.io/buttons.js',
  `${baseUrl}vendor/example-code-dom.umd.js`,
  `${baseUrl}boot.js`,
]

function Footer(proper) {
  return (
    <footer
      id="footer"
      className="nav-footer"
      style={{ textAlign: 'center', padding: '20px' }}
    >
      <section className="copyright">❤</section>
      {scripts.map(url => <script src={url} key={url} />)}
    </footer>
  )
}

module.exports = Footer
