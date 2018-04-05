const users = [
  {
    caption: 'User1',
    image: '/example-code/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
]

const siteConfig = {
  title: 'Test Site' /* title for your website */,
  tagline: 'A website for testing',
  url: 'https://facebook.github.io' /* your website url */,
  baseUrl: '/example-code/' /* base url for your project */,
  projectName: 'example-code',
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
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
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/zenflow/example-code',
}

module.exports = siteConfig
