const exampleCodeCompile = require('example-code-compile')

module.exports = (md, options) => {
  const oldRender = md.render
  md.render = (str, options) =>
    exampleCodeCompile({
      html: oldRender.call(md, str, options),
    })
}
