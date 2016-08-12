const gulp = require('gulp');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

/**
 * Builds HTML markup found in /src/assets/
 *
 * @task buildMarkup
 */
gulp.task('buildMarkup', done => {
    return build(false, done);
});

/**
 * Watches HTML markup found in /src/assets/
 *
 * @task watchMarkup
 */
gulp.task('watchMarkup', done => {
    gulp.watch(`${global.env.DIR_SRC}/**/*.html`, () => {
        build(true);
    });
    done();
});

function build(isWatch, done) {
    return gulp
        .src([
            `${global.env.DIR_SRC}/**/*.html`,
            `!${global.env.DIR_SRC}/assets/vendor/**`
        ])
        .pipe(plumber({
            errorHandler: notify.onError({ message: '<%= error.message %>', title: 'Markup error' })
        }))
        .pipe(gulp.dest(global.env.DIR_DEST))
        .pipe(gulpIf(isWatch, notify({
            message: ' ',
            title: 'Markup complete',
            onLast: true
        })))
        .pipe(global.browserSync.reload({ stream: true }));
}
