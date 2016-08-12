const babel = require('gulp-babel');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

/**
 * Builds JavaScript files found in /src/assets/scripts
 *
 * @task buildScripts
 */
gulp.task('buildScripts', done => {
    return build(false, done);
});

/**
 * Watches JavaScript files found in /src/assets/scripts
 *
 * @task watchScripts
 */
gulp.task('watchScripts', done => {
    gulp.watch(`${global.env.DIR_SRC}/**/*`, () => {
        build(true);
    });
    done();
});

function build(isWatch, done) {
    return gulp
        .src(`${global.env.DIR_SRC}/**/*`)
        .pipe(plumber({
            errorHandler: notify.onError({ message: '<%= error.message %>', title: 'Scripts error' })
        }))
        .pipe(babel({
            presets: ['es2015'],
            plugins: [
                'transform-class-properties',
                'transform-async-to-generator',
                'transform-runtime'
            ]
        }))
        .pipe(buffer())
        .pipe(gulp.dest(`${global.env.DIR_DEST}/`))
        .pipe(gulpIf(isWatch, notify({
            message: ' ',
            title: 'Scripts complete',
            onLast: true
        })));
}
