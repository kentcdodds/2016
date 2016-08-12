const gulp = require('gulp');
const notify = require('gulp-notify');

/**
 * Displays a notification
 *
 * @task notify
 */
gulp.task('notify', done => {
    // dummy source file, because gulp-notify won't run without a pipe
    gulp.src('Gulpfile.js')
        .pipe(notify({ message: 'Build complete!' }));
});

