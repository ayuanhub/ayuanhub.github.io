import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  title: '資料字典網站',
  tagline: 'focus on your content',
  url: 'https://cvmdoc.github.io',
  baseUrl: '/',
  projectName: 'cvmdoc.github.io', // Usually your repo name.
  organizationName: 'cvmdoc', // Usually your GitHub org/user name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['@orama/plugin-docusaurus-v3'],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.         
        },        
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true ,
    },
    navbar: {
      title: 'CVMDoc',
      logo: {
        src: 'img/logo-animation.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'jobStatus',
          position: 'left',
          label: '新人資系統',
        },
      ],
    },
    footer:{
      copyright:`Copyright © ${new Date().getFullYear()} 平台應用科<br>檔案為機密文件，請勿外流！`,
    },
    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
