require('./build')
const { readFileSync } = require('fs')
const remarkablePluginExampleCode = require('../packages/remarkable-plugin-example-code')

const url = 'https://zenflow.github.io'
const baseUrl = '/example-code/'
const repoUrl = 'https://github.com/zenflow/example-code'
const readme = readFileSync('../README.md', 'utf8')

const siteConfig = {
  url,
  baseUrl,
  repoUrl,
  readme,
  title: 'example-code',
  tagline: 'Impressive enhancements for code blocks in your documentation site',
  organizationName: 'zenflow',
  projectName: 'example-code',
  headerLinks: [
    { page: 'index', label: 'Home' },
    { doc: 'index', label: 'Docs' },
    { href: repoUrl, label: 'GitHub' },
  ],
  colors: {
    primaryColor: '#8E3B46',
    secondaryColor: '#F6F2A3',
  },
  highlight: { theme: 'default' }, // Highlight.js theme to use for syntax highlighting in code blocks
  markdownPlugins: [remarkablePluginExampleCode],
  onPageNav: 'separate',
}

module.exports = siteConfig
