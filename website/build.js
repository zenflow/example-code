const del = require('del')
const makeDir = require('make-dir')
const { resolve } = require('path')
const { execSync } = require('child_process')
const { copyFileSync } = require('fs')

del.sync('./static/vendor')
makeDir.sync('./static/vendor')
const cwd = resolve(__dirname, '..', 'packages', 'example-code-dom')
const buildResult = execSync('npm run build', { encoding: 'utf8', cwd })
console.log('packages/example-code-dom $ npm run build', buildResult)
copyFileSync(
  '../packages/example-code-dom/dist/example-code-dom.umd.js',
  './static/vendor/example-code-dom.umd.js',
)
