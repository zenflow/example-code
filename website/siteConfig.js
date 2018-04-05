const basePath = '/example-code/'

const users = [
  {
    caption: 'User1',
    image: `${basePath}img/docusaurus.svg`,
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
]

const siteConfig = {
  title: 'example-code',
  tagline: 'Enhance `<code>` elements with an "execute" button and more',
  url: `https://zenflow.github.io${basePath}`,
  organizationName: 'zenflow',
  baseUrl: basePath,
  projectName: 'example-code',
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],
  users,
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  /* custom fonts for website */
  /* fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  }, */
  copyright: '❤',
  highlight: { theme: 'default' }, // Highlight.js theme to use for syntax highlighting in code blocks
  scripts: [
    'https://buttons.github.io/buttons.js',
    `${basePath}vendor/example-code-dom.umd.js`,
    `${basePath}js/boot.js`,
  ],
  repoUrl: 'https://github.com/zenflow/example-code',
}

module.exports = siteConfig
