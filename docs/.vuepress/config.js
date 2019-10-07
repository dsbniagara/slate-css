const versioning = require('./lib/versioning.js')

module.exports = {
    postcss: {
        plugins: [
            require('@dsbn/slate-css'),
            require('postcss-nested',{}),
            require('postcss-color-function', {}),
        ]
    },
    title: '@dsbn/slate-css',
    description: 'Slate is a CSS framework for building websites / web apps',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.png'
        }]
    ],
    themeConfig: {
        editLinks: true, //  "Edit this page" at the bottom of each page
        lastUpdated: 'Last Updated', //  "Last Updated" at the bottom of each page
        repo: '-', //  Github repo
        docsDir: 'docs/', //  Github repo docs folder    
        versions: {
            latest: versioning.versions.latest,
            selected: versioning.versions.latest,
            all: versioning.versions.all
        },
        search: false,
        nav: [
            {
                text: `Docs`,
                items: versioning.linksFor('intro.md') // TODO create custom component
            }
        ],
        sidebar: versioning.sidebars
    }
}