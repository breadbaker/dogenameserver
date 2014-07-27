'use strict';

var browserify = function (gruntObj) {
    var scripts = gruntObj.config.get('scripts');

    gruntObj.loadNpmTasks('grunt-browserify');

    gruntObj.config.set('browserify', {

        options: {
            debug: true
        },
    });

    gruntObj.config.set('browserify.app', {

        files: [{
            dest: 'web/main.js',
            src: [
                'src/main.js'
            ],
        }],
    });

    gruntObj.config.set('watch.browserify', {
        files: [
            'src/**/*.js',
            '!src/vendor/**/*.js'
        ],
        tasks: [
            'browserify:app',
        ],
        options: {
            debug: true
        }
    });

    return gruntObj;
};

module.exports = browserify;
