module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        browserify : {
            dist : {
                src : 'src/index.js',
                dest : 'bundle.js'
            }
        },
        watch : {
            scripts : {
                files : ['src/**/*.js'],
                tasks : ['browserify']
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
