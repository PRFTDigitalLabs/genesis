var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: "JST"
                },
                files: {
                    'build/js/templates-built.js': "client/templates/**/*.hbs"
                }
            }
        },
        transpile: {
            main: {
                type: "amd",
                moduleName: function(path) {
                    return 'genesis/' + path;
                },
                files: [{
                    expand: true,
                    cwd: 'client/app/',
                    src: ['**/*.js'],
                    dest: 'tmp/app/'
                }]
            }
        },
        concat: {
            app: {
                src: ['tmp/app/**/*.js'],
                dest: 'build/js/app-built.js',
            },
            vendor: {
                src: ['client/vendor/**/*.js'],
                dest: 'build/js/vendor-built.js',
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'client/scss/',
                    cssDir: 'build/css/'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            no_dest: {
                src: 'build/css/main.css'
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'client/img/',
                    src: ['**'],
                    dest: 'build/img/'
                },
                {
                    expand: true,
                    cwd: './',
                    src: 'favicon.ico',
                    dest: 'build'
                },
                {
                    expand: true,
                    cwd: 'client/fonts/',
                    src: ['**'],
                    dest: 'build/fonts/'
                },
                {         
                    expand: true,           
                    cwd: 'public',
                    src: 'index.html',
                    dest: 'build'
                }]
            }
        },
        watch: {
            modules: {
                files: ['client/app/**/*.js'],
                tasks: ['transpile', 'concat:app'],
                options: {
                    debounceDelay: 300
                }
            },
            vendor: {
                files: ['client/vendor/**/*.js'],
                tasks: ['concat:vendor'],
                options: {
                    debounceDelay: 300
                }
            },
            templates: {
                files: ['client/templates/**/*.hbs'],
                tasks: ['handlebars'],
                options: {
                    debounceDelay: 300
                }
            },
            css: {
                files: ['client/scss/*.scss'],
                tasks: ['compass', 'autoprefixer'],
                options: {
                    debounceDelay: 300
                }
            },
            images: {
                files: ['client/img/*'],
                tasks: ['copy'],
                options: {
                    debounceDelay: 300
                }
            },
            fonts: {
                files: ['client/fonts/*'],
                tasks: ['copy'],
                options: {
                    debounceDelay: 300
                }
            }
        },
        express: {
            livereload: {
                options: {
                    port: 9000,
                    monitor: {},
                    debug: true,
                    server: path.resolve('./server/app')
                }
            }
        },
        uglify: {
            build: {
                src: 'build/js/*.js',
                dest: 'release/js/release.min.js'
            }
        },
        cssmin: {
            compress: {
                files: {
                    "release/css/main.min.css": ["build/css/main.css"]
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-es6-module-transpiler');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['transpile', 'handlebars', 'concat', 'copy', 'compass', 'autoprefixer', 'express', 'watch']);
    grunt.registerTask('release', ['uglify', 'cssmin']);
};
