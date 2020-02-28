const versioning = require('./lib/versioning.js.js')

module.exports = {
    postcss: {
        plugins: [
            require('../../src/postcss'),
            require('postcss-nested',{}),
            require('postcss-color-function', {}),
        ]
    },
    title: '@dsbn/slate-css',
    description: 'Slate is a CSS framework for building web sites / apps',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.png'
        }]
    ],
    themeConfig: {
        packageName: '@dsbn/slate-css',
        editLinks: true, //  "Edit this page" at the bottom of each page
        lastUpdated: 'Last Updated', //  "Last Updated" at the bottom of each page
        repo: 'https://github.com/dsbniagara/slate-css', //  Github repo
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