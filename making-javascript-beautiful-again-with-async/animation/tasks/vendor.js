const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

/**
 * Builds vendor files found in /src/assets/vendor
 *
 * @task buildStyles
 */
gulp.task('buildVendor', done => {
    return build(done);
});

function build(done) {
    const bundler = browserify({
        debug: global.env.SOURCE_MAPS,
    });

    // individually require all libs specified in vendor list
    global.vendorArray.forEach(vendor => { bundler.require(vendor); });

    return bundler
        .bundle()
        .on('error', notify.onError({
            message: '<%= error.message %>',
            title: 'Vendor error'
        }))
        .pipe(source('vendor.js'))
        .pipe(buffer())
        .pipe(gulpIf(global.env.SOURCE_MAPS, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpIf(global.env.MINIFY, uglify()))
        .pipe(gulpIf(global.env.SOURCE_MAPS, sourcemaps.write('./')))
        .pipe(gulp.dest(`${global.env.DIR_DEST}/assets/scripts/`));
}
