/**
 * Gulpfile
 */

// Load environment-specific configuration
global.env = require(`./env.js`);
console.log('USING CONFIGURATION:\n', global.env);

// This line must run before require('gulp') to work
enableNotifications(global.env.NOTIFY);

// Require stuff
const del = require('del');
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

// Set globals
global.pkg = require('./package.json');

/**
 * Globally disables the `gulp-notify` plugin
 */
function enableNotifications(enable) {
    if (enable !== true) {
        process.env.DISABLE_NOTIFIER = true;
    }
}

// Pull in all tasks from the tasks folder
requireDir('./tasks', { recurse: true });

/**
 * Default task
 *
 * @task default
 */
gulp.task('default', done => {
    runSequence(['build'], done);
});

/**
 * Compile source code and outputs to destination.
 *
 * @task build
 */
gulp.task('build', done => {
    const tasks = [
        ['cleanDest'],
        ['buildScripts'],
        ['notify']
    ];

    runSequence(...tasks, done);
});

/**
 * Watches file changes
 *
 * @task watch
 */
gulp.task('watch', done => {
    runSequence(['watchScripts'], done);
});

/**
 * Cleans destination directory
 *
 * @task cleanDest
 */
gulp.task('cleanDest', done => {
    return del(global.env.DIR_DEST);
});
