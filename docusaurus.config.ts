import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
    title: 'The Ancient Archives',
    tagline: 'The knowledge of old',
    url: 'https://archives.letsbuilda.dev/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'letsbuilda',
    projectName: 'archives.letsbuilda.dev',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/letsbuilda/archives.letsbuilda.dev/tree/main/',
                },
                blog: false,
            } satisfies Preset.Options,
        ],
    ],

    themeConfig:
        {
            navbar: {
                title: 'The Ancient Archives',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        href: 'https://github.com/letsbuilda/',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Projects',
                        items: [
                            {
                                label: 'Meet our projects',
                                to: 'https://letsbuilda.dev',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/hC6R5CtEq7',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/letsbuilda',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Let's Build a ..., Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['powershell'],
            },
        } satisfies Preset.ThemeConfig,
};

module.exports = config;
