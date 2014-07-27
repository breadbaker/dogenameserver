'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.config.set('nodemon', {
        options: {
        },
        dev: {
            script: 'index.js',
            options: {
                verbose: true,
                nodeArgs: ['--debug']
            }
        }
    });

    return grunt;
};