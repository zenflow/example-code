const { promisify } = require('util')
const fs = require('fs')
const exampleCodeCompile = require('example-code-compile')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

module.exports = async ({ log, cwd, args }) => {
  const { _: [input], output = input, help } = args
  if (help) {
    log(`\
Usage: npx example-code-cli <input> [options]

Parameters:
  <input>      Html file to process
  
Options:
  --output     File to output to, defaults to <input>
  --help       Print help and exit
`)
    process.exit(1)
  }
  log('example-code: ', { input, output })
  const source = await readFile(input, 'utf8')
  const compiled = exampleCodeCompile({ html: source })
  if (compiled !== source) {
    await writeFile(output, compiled)
  }
}
