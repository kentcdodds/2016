/**
 * Default constants to use during gulp builds.
 * These values can be overriden depending on the environment
 * (eg, env-dev.js may specify `MINIFY: false` instead).
 *
 * @class Config
 * @static
 */
const Config = {
    /**
     * Whether JS and CSS assets should be minified for production use.
     * Set to `false` for faster builds during development.
     *
     * @property MINIFY
     * @type {String}
     */
    MINIFY: false,

    /**
     * Whether to create JS and CSS source maps for debugging.
     * Generates separate .map files that the browser will only load if
     * the developer console is open.
     *
     * @property SOURCE_MAPS
     * @type {String}
     */
    SOURCE_MAPS: true,

    /**
     * Whether to automatically open the web browser after starting local
     * development server using `grunt serve`.
     *
     * @property SERVER_OPEN
     * @type {String}
     */
    SERVER_OPEN: true,

    /**
     * Port to use when starting local development server using `grunt serve`
     *
     * @property SERVER_PORT
     * @type {String}
     */
    SERVER_PORT: 3000,

    /**
     * Display a desktop notification after build is complete.
     * Turn off for production environments or non-interactive builds.
     *
     * @property NOTIFY
     * @type {String}
     */
    NOTIFY: true,
    
    /**
     * Use auto prefixer to provide cross-browser prefixes in CSS.
     *
     * @property AUTO_PREFIXER
     * @type {String}
     */
    AUTO_PREFIXER: true,

    /**
     * Path where Node.js modules are installed. No trailing slash.
     *
     * @property DIR_NPM
     * @type {String}
     */
    DIR_NPM: 'node_modules',

    /**
     * Path where Bower libraries are installed. No trailing slash.
     *
     * @property DIR_BOWER
     * @type {String}
     */
    DIR_BOWER: 'src/assets/vendor',

    /**
     * Path to uncompiled source files. No trailing slash.
     *
     * @property DIR_SRC
     * @type {String}
     */
    DIR_SRC: 'src',

    /**
     * Path to compiled output files. No trailing slash.
     *
     * @property DIR_DEST
     * @type {String}
     */
    DIR_DEST: 'web',
};

module.exports = Config;
