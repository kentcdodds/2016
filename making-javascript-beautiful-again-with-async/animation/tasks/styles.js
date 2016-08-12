const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

/**
 * Watches CSS files found in /src/assets/scss
 *
 * @task buildStyles
 */
gulp.task('buildStyles', done => {
    return build(false, done);
});

/**
 * Watches CSS files found in /src/assets/scss
 *
 * @task watchStyles
 */
gulp.task('watchStyles', done => {
    gulp.watch(`${global.env.DIR_SRC}/assets/scss/**/*`, () => {
        build(true);
    });
    done();
});

function build(isWatch, done) {
    return gulp
        .src(`${global.env.DIR_SRC}/assets/scss/*.scss`)
        .pipe(plumber({
            errorHandler: notify.onError({ message: '<%= error.message %>', title: 'Styles error' })
        }))
        .pipe(gulpIf(global.env.SOURCE_MAPS, sourcemaps.init()))
        .pipe(sass.sync())
        .pipe(gulpIf(global.env.AUTO_PREFIXER, autoprefixer('last 2 versions')))
        .pipe(gulpIf(global.env.MINIFY, cleanCSS()))
        .pipe(gulpIf(global.env.SOURCE_MAPS, sourcemaps.write('./')))
        .pipe(gulp.dest(`${global.env.DIR_DEST}/assets/styles/`))
        .pipe(gulpIf(isWatch, notify({
            message: ' ',
            title: 'Styles complete',
            onLast: true
        })))
        .pipe(global.browserSync.reload({ match: '**/*.css', stream: true }));
}
