const { promisify } = require('util')
const fs = require('fs')
const exampleCodeCompile = require('example-code-compile')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

module.exports = async ({ log, cwd, args }) => {
  const { input, output = input } = args
  console.log({ input, output })
  const source = await readFile(input, 'utf8')
  const compiled = exampleCodeCompile({ html: source })
  if (compiled !== source) {
    await writeFile(output, compiled)
  }
}
