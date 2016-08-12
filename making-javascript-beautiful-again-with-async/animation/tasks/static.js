const gulp = require('gulp');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

/**
 * Builds static files found in /src/assets/media
 *
 * @task buildStatic
 */
gulp.task('buildStatic', done => {
    return build(false, done);
});

/**
 * Watches static files found in /src/assets/media
 *
 * @task watchStatic
 */
gulp.task('watchStatic', done => {
    gulp.watch(`${global.env.DIR_SRC}/assets/images/**/*`, () => {
        build(true);
    });
    done();
});

function build(isWatch, done) {
    return gulp
        .src([
            `${global.env.DIR_SRC}/assets/images/**/*`
        ], { base: global.env.DIR_SRC })
        .pipe(plumber({
            errorHandler: notify.onError({ message: '<%= error.message %>', title: 'Static error' })
        }))
        .pipe(gulp.dest(global.env.DIR_DEST))
        .pipe(gulpIf(isWatch, notify({
            message: ' ',
            title: 'Static complete',
            onLast: true
        })))
        .pipe(global.browserSync.reload({ match: '**/*.{png,gif,jpg}', stream: true }));
}
