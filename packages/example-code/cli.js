#!/usr/bin/env node

const minimist = require('minimist')
const command = require('./lib/command')

command({
  log: console.log,
  cwd: process.cwd(),
  args: Object.assign(
    {}, // defaults
    minimist(process.argv.slice(2)),
  ),
}).catch(error => {
  console.error(error)
  process.exit(1)
})
