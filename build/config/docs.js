'use strict';

var config = require('../../src/config'),
    disqus = !!config.docs.disqus.id ? {
        shortName: config.docs.disqus.id,
        url: config.server.authorityDocs,
        dev: config.env.development
    } : null;

module.exports = {
    options: {
        dest: 'src/hosts/docs/.bin',
        startPage: '/getting-started',
        title: config.docs.title,
        discussions: disqus,
        improve: {
            repo: config.meta.repo
        },
        host: config.server.authorityDocs,
        sections: {
            'getting-started': {
                title: 'Getting Started',
                src: ['docs/getting-started/**/*.ngdoc']
            },
            markdown: {
                title: 'Markdown',
                src: ['docs/markdown/**/*.ngdoc']
            }
        }
    }
};