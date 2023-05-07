const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  title: 'CVMDoc文件網站',
  // tagline: 'Dinosaurs are cool',
  tagline: 'focus on your content',
  url: 'https://ayuanhub.github.io',
  baseUrl: '/',
  projectName: 'ayuanhub.github.io', // Usually your repo name.
  organizationName: 'ayuanhub', // Usually your GitHub org/user name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  trailingSlash: false,
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode: 'dark',
        disableSwitch: true ,
      },
      navbar: {
        title: 'CVMDoc',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-animation.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '數據工程科',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer:{
        copyright:`Copyright © ${new Date().getFullYear()} 客群經營部<br>檔案為機密文件，請勿外流！`,
      },
    }),
});
