'use strict';

module.exports = function (grunt) {

    grunt.file.expand('grunt/*.js').forEach(function (task) {
        require('./' + task)(grunt);
    });

    grunt.registerTask('default', [
        'nodemon'
    ]);
};
