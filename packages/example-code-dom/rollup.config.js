const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
const pkg = require('./package.json')

if (process.env.NODE_ENV === 'production') {
  module.exports = [false, true].map(minify => ({
    ...getInputOptions({ minify }),
    output: ['cjs', 'es', 'umd'].map(format =>
      getOutputOptions({ minify, format, sourcemap: false }),
    ),
  }))
} else {
  module.exports = {
    ...getInputOptions({ minify: false }),
    output: ['cjs', 'es', 'umd'].map(format =>
      getOutputOptions({ minify: false, format, sourcemap: true }),
    ),
  }
}

function getInputOptions({ minify }) {
  return {
    input: 'src/index.js',
    plugins: [
      babel({
        babelrc: false,
        presets: [
          [
            require.resolve('babel-preset-env'),
            {
              modules: false,
            },
          ],
        ],
        plugins: [
          require.resolve('babel-plugin-external-helpers'),
          require.resolve('babel-plugin-transform-object-rest-spread'),
        ],
        exclude: 'node_modules/**',
      }),
      nodeResolve({
        main: true,
      }),
      commonjs(),
      ...(minify
        ? [
            uglify({
              output: {
                comments: (node, { type, value }) =>
                  type === 'comment2' // multiline comment
                    ? /@preserve|@license|@cc_on/i.test(value)
                    : false,
              },
            }),
          ]
        : []),
    ],
  }
}

function getOutputOptions({ minify, format, sourcemap }) {
  const file = `dist/example-code-dom.${format}${minify ? '.min' : ''}.js`
  return {
    format,
    file,
    name: 'exampleCodeDom',
    banner: getBanner(file),
    sourcemap,
  }
}

function getBanner(file) {
  let banner = `/** @preserve
  * package: ${pkg.name} v${pkg.version}
  * file: ${file}\n`
  if (pkg.homepage) {
    banner += `  * homepage: ${pkg.homepage}\n`
  }
  if (pkg.license) {
    banner += `  * license: ${pkg.license}\n`
  }
  return banner + `  **/\n`
}
