const versioning = require('./lib/versioning.js')

module.exports = {
    postcss: {
        plugins: [
            require('@dsbn/slatecss'),
            require('postcss-nested',{}),
            require('postcss-color-function', {}),
        ]
    },
    title: 'slatecss',
    description: 'CSS framework',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.png'
        }],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
        },]
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