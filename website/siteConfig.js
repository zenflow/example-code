const remarkablePluginExampleCode = require('../packages/remarkable-plugin-example-code')

const basePath = '/example-code/'
const repoUrl = 'https://github.com/zenflow/example-code'

const siteConfig = {
  title: 'example-code',
  tagline: 'Enhance `<code>` elements with an "execute" button and more',
  url: `https://zenflow.github.io${basePath}`,
  organizationName: 'zenflow',
  baseUrl: basePath,
  projectName: 'example-code',
  headerLinks: [
    { page: 'index', label: 'Home' },
    { doc: 'intro', label: 'Docs' },
    { href: repoUrl, label: 'GitHub' },
  ],
  colors: {
    primaryColor: '#8E3B46',
    secondaryColor: '#E1DD8F',
  },
  highlight: { theme: 'default' }, // Highlight.js theme to use for syntax highlighting in code blocks
  scripts: [
    'https://buttons.github.io/buttons.js',
    `${basePath}vendor/example-code-dom.umd.js`,
    `${basePath}boot.js`,
  ],
  repoUrl,
  markdownPlugins: [remarkablePluginExampleCode],
}

module.exports = siteConfig
