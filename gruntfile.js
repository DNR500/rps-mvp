module.exports = function (grunt)
{
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jsonlint: {
            project: {
                src: [ 'package.json', '.eslintrc.json', '.babelrc', 'src/**/*.json', 'test/**/*.json' ]
            }
        },
        eslint: {
            src_node:{
                src: ['src/**/*.js'],
                options: {
                    configFile: '.eslintrc.json'
                }
            }
        },
        node_mocha: {
            node : {
                src : ['test/node/**/*.js'],
                options : {
                    mochaOptions : {
                        globals : ['expect'],
                        require: ['babel-core/register'],
                        timeout : 3000,
                        ignoreLeaks : false,
                        ui : 'bdd',
                        reporter : 'landing'
                    }
                }
            }
        },
        babel: {
            options: {
                presets: ['es2015-node']
            },
            node:{
                files: [
                    {
                        expand: true, cwd: 'src/', src: ['**/*.js'], dest: 'build/', ext: '.js'
                    }
                ]
            }
        },
        copy: {
            build: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**', '!**/scss/**'], dest: 'build/'}
                ]
            }
        },
        clean: {
            'build-prep': ['build/*.js'],
            slate: ['build']
        }
    });

    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-node-mocha');

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['jsonlint', 'eslint', 'node_mocha']);
    grunt.registerTask('build', ['clean:slate', 'copy:build', 'clean:build-prep','babel:node']);
};