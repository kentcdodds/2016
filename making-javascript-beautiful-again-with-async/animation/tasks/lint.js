const eslint = require('gulp-eslint');
const gulp = require('gulp');

/**
 * Lints all JavaScript files for syntax issues in /src/assets/scripts
 *
 * @task lint
 */
gulp.task('lint', done => {
    return gulp
        .src([`${global.env.DIR_SRC}/assets/scripts/**/*.js`])
        .pipe(eslint())
        .pipe(eslint.format('table'));
});
