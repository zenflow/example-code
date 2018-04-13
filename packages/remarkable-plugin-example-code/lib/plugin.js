const exampleCodeCompile = require('example-code-compile')

module.exports = (md, pluginOptions) => {
  const oldRender = md.render
  md.render = (str, renderOptions) =>
    exampleCodeCompile(oldRender.call(md, str, renderOptions), pluginOptions)
}
