// @ts-check
// A landing page (src/pages/index.js), a License page, and a Software Tools
// page (src/pages/software-tools.js) that renders robotiq/.github's
// profile/README.md, the https://github.com/robotiq org landing page. Tool
// documentation lives in each tool's own repository; see README.md.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Build with Robotiq',
  tagline: 'Software tools for developers',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: {
      rspackPersistentCache: false,
    },
  },

  url: 'https://robotiq.github.io',
  baseUrl: '/',
  organizationName: 'robotiq',
  projectName: 'robotiq.github.io',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/robotiq-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        style: 'dark',
        title: '',
        logo: {
          alt: 'Robotiq',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/software-tools',
            label: 'Software Tools',
            position: 'left',
          },
          {
            href: 'https://github.com/robotiq',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'License',
                to: '/license',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'robotiq.com',
                href: 'https://robotiq.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/robotiq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robotiq, Inc. All rights reserved.`,
      },
    }),
};

export default config;
