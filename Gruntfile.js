'use strict';
module.exports = function(grunt) {
    // Load all tasks
    require('load-grunt-tasks')(grunt);
    // Show elapsed time
    require('time-grunt')(grunt);

    var pkg = require('./package.json');

    grunt.initConfig({

        app: {
            dist: '_site',
            assets: '_assets'
        },

        connect: {
            serve: {
                options: {
                    port: 4000,
                    base: '_site',
                    keepalive: true
                }
            }
        },

        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '_config.yml', 
                    'index.html', 
                    '_layouts/**', 
                    '_posts/**', 
                    '_includes/**', 
                    '<%= app.assets %>/**/*.{png,jpg,jpeg,gif,webp,svg,scss,css,js}'
                ],
                tasks: ['jekyll:serve']
            }
        },

        clean: {
            dist: ['<%= app.dist %>']
        },

        jekyll: {
            options: {
                bundleExec: true
            },
            dist: {
                options: {
                    dest: '<%= app.dist %>'
                }
            },
            serve: {
                options: {
                    dest: '<%= app.dist %>',
                    drafts: true,
                    config: '_config.yml,_config.dev.yml'
                }
            }
        },

        browserSync: {
            files: {
                src: ['<%= app.dist %>', '<%= app.dist %>/assets/*.{css,js}']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                }
            }
        },

        buildcontrol: {
            options: {
                dir: '.',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
                tag: pkg.version
            },
            github: {
                options: {
                    remote: 'git@github.com:tortillaj/cejams.git',
                    branch: 'master'
                }
            },
            ghPages: {
                options: {
                    remote: 'git@github.com:tortillaj/cejams.git',
                    branch: 'gh-pages'
                }
            }
        },

        modernizr: {
            dist: {
                outputFile: '<%= app.assets %>/javascripts/modernizr.js',
                tests: ['respond', 'svg', 'mq', 'touch', 'localstorage', 'css_filters', 'css_backgroundsizecover', 'inputtypes', 'url_data_uri'],
                uglify: false,
                parseFiles: false
            }
        }


    });

    // Register tasks
    grunt.registerTask('default', ['clean', 'jekyll:serve', 'browserSync', 'watch']);

    grunt.registerTask('build', ['clean', 'jekyll:dist', 'buildcontrol:github']);

};