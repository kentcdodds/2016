const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const notify = require('gulp-notify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const watchify = require('watchify');

/**
 * Builds JavaScript files found in /src/assets/scripts
 *
 * @task buildMarkup
 */
gulp.task('buildScripts', done => {
    return build(false, done);
});

/**
 * Watches JavaScript files found in /src/assets/scripts
 * Watchify is used for fast incremental JavaScript builds.
 *
 * @task buildMarkup
 */
gulp.task('watchScripts', done => {
    return build(true, done);
});

function build(isWatch, done) {
    const plugins = [];

    if (isWatch) {
        plugins.push(watchify);
    }

    // prevent relative path hell by setting base path.
    // This allows the syntax `import('path/filename')`
    const bundler = browserify({
        cache: {},
        packageCache: {},
        plugin: plugins,
        debug: global.env.SOURCE_MAPS,
        entries: [`${global.env.DIR_SRC}/assets/scripts/main.js`],
        paths: ['./src/assets/scripts'] ,
    })
    .external(global.vendorArray)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.js'],
        plugins: [
            'transform-class-properties',
            'transform-async-to-generator',
            'transform-runtime'
        ],
    });

    const onUpdate = () => {
        return bundler
            .bundle()
            .on('error', notify.onError({
                message: '<%= error.message %>',
                title: 'Scripts error'
            }))
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(gulpIf(global.env.SOURCE_MAPS, sourcemaps.init({ loadMaps: true })))
            .pipe(gulpIf(global.env.MINIFY, uglify()))
            .pipe(gulpIf(global.env.SOURCE_MAPS, sourcemaps.write('./')))
            .pipe(gulp.dest(`${global.env.DIR_DEST}/assets/scripts/`))
            .pipe(global.browserSync.reload({ stream: true }));
    };

    bundler.on('update', () => {
        console.log('Scripts: file update detected, rebuilding...');
        onUpdate();
    });

    bundler.on('log', message => {
        // dummy source file, because gulp-notify won't run without a pipe
        gulp.src('Gulpfile.js')
            .pipe(gulpIf(isWatch, notify({ message, title:'Scripts complete' })));
    });

    return onUpdate();
}
