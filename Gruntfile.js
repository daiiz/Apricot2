module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        browserify : {
            dist : {
                src : 'src/index.js',
                dest : 'www/bundle.js'
            }
        },
        mochaTest: {
            test: {
                src: ['test/**/*.js']
            }
        },
        watch : {
            scripts : {
                files : ['src/**/*.js', 'test/**/*.js'],
                tasks : ['mochaTest', 'browserify']
            }
        }
    });

    Object.keys(pkg.devDependencies).forEach(function (devDependency) {
        if (devDependency.match(/^grunt\-/)) {
            grunt.loadNpmTasks(devDependency);
        }
    });

    grunt.registerTask('default', ['watch']);
};
