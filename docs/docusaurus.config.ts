import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Porto SAP',
  tagline: 'Scalable Software Architectural Pattern',
  favicon: 'img/porto-favicon.png',

  // Set the production url of your site here
  url: 'https://porto.zalt.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // Served at the root of the porto.zalt.me custom domain.
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mahmoudz/Porto', // Usually your GitHub org/user name.
  projectName: 'Porto', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        // Default docs instance = "Porto for Humans".
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Second docs instance = "Porto for AI" (separate product, separate tree).
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ai',
        path: 'docs-ai',
        routeBasePath: 'ai',
        sidebarPath: './sidebarsAi.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/porto-logo.png',
    navbar: {
      title: 'Porto SAP',
      logo: {
        alt: 'Porto SAP Logo',
        src: 'img/porto-logo.png',
      },
      items: [
        {
          type: 'custom-editionDropdown',
          position: 'left',
          items: [
            {
              href: '/docs/Intro',
              label: 'for Humans',
            },
            {
              href: '/ai/Intro',
              label: 'for AI',
            },
          ],
        },
        {
          href: 'https://github.com/Mahmoudz/Porto',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © 2016 - ${new Date().getFullYear()} - Porto SAP. Maintained by <a href="https://zalt.me" target="_blank" rel="noopener noreferrer">Mahmoud Zalt</a>, also building <a href="https://sistava.com" target="_blank" rel="noopener noreferrer">Sistava</a> at <a href="https://sista.ai" target="_blank" rel="noopener noreferrer">Sista AI</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
