module.exports = {
  title: 'Backend.AI Documentation',
  tagline: 'Backend.AI Documentation and Tech Blog',
  url: 'https://docs.backend.ai',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lablup', // Usually your GitHub org/user name.
  projectName: 'backend.ai-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Backend.AI',
      logo: {
        alt: 'Backend.AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs', // FIXME: an empty str makes it always active...
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/api-ref/',
          activeBasePath: 'api-ref/',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://blog.lablup.com/',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/lablup/backend.ai',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          // title: 'API Reference',
          // items: [
          //   {
          //     label: 'Manager API (REST)',
          //     to: '/api-ref/manager/rest/',
          //   },
          //   {
          //     label: 'Manager API (GraphQL)',
          //     to: '/api-ref/manager/gql/',
          //   },
          //   {
          //     label: 'Storage Proxy API (Client-facing)',
          //     to: '/api-ref/storage-proxy/client-facing/',
          //   },
          //   {
          //     label: 'Storage Proxy API (Manager-facing)',
          //     to: '/api-ref/storage-proxy/manager-facing/',
          //   },
          //   {
          //     label: 'WebSocket Proxy API',
          //     to: '/api-ref/wsproxy/',
          //   },
          //   {
          //     label: 'Client SDK API (Python)',
          //     to: '/api-ref/client-py/',
          //   },
          // ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Home',
              href: 'https://lablup.com/',
            },
            {
              label: 'Jobs',
              href: 'https://lablup.com/job',
            },
            {
              label: 'Backend.AI',
              href: 'https://backend.ai/',
            },
            {
              label: 'Blog',
              to: 'https://blog.lablup.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lablup',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lablup, Inc. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'G-WM46W8FFE5',
      // anonymizeIP: true, // Should IPs be anonymized?
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/lablup/backend.ai-docs/edit/main/',
        },
        'api-ref': {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'api-ref/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/lablup/backend.ai-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
