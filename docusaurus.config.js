// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TRC ElenIA',
  tagline: 'API AI',
  favicon: 'img/favicon.ico',
  url: 'https://docs.trcelenia.com',
  baseUrl: '/',
  organizationName: 'TRC Recruitme',
  projectName: 'TRC',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: '#',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: '#',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'modules',
        path: 'modules',
        routeBasePath: 'modules',
        sidebarPath: require.resolve('./sidebarsModules.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'webpage',
        path: 'WebPage',
        routeBasePath: 'webpage',
        sidebarPath: require.resolve('./sidebarsWebpage.js'),
      },
    ],
  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/trc-social-card.png',
      navbar: {
        title: '',
        logo: {
          alt: 'API',
          src: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'modulesSidebar',
            docsPluginId: 'modules',
            position: 'left',
            label: 'Modulos',
          }
          ,
          {
            type: 'docSidebar',
            sidebarId: 'WebPageSidebar',
            docsPluginId: 'webpage',
            position: 'left',
            label: 'WebPage',
          }

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'CRM',
                to: '/modules/CRM/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'More',
            items: [],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TRC Recruitme.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
