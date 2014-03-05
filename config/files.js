/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You can find the parent object in: node_modules/lineman/config/files.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {

    js: {
        vendor: [
            // jQuery should go before angular
            // "vendor/js/jquery-1.10.2.js",
            // Select2 has to be included after jQuery
            // "vendor/js/select2.js",
            "vendor/js/angular.js",
            "vendor/js/angular-resource.js",
            "vendor/js/angular-cookies.js",
            "vendor/js/angular-ui-router.js",
            "vendor/js/ui-bootstrap-tpls.js"
            // "vendor/js/underscore.js",
            // use Select2 ?
            // "vendor/js/ui-select2.js",

            // If we want enable ALL vendors to be compiled in, we can use pattern
            // But! this is not recommended because from my experience sometimes it breaks things
            // especially when using angular with jQuery and friends (plugins)
            //  "vendor/js/**/*.js"
        ],
        app: [
            "!app/*.spec.js",
            "!app/**/*.spec.js",
            "app/app.js",
            "app/**/_*.js", // include meta packages before code
            "app/**/*.js"
        ]
    },

    less: {
        compile: {
            options: {
                paths: [
                    "vendor/css/**/*.css",
                    "app/**/*.css",
                    "app/**/*.less"
                ]
            }
        }
    }
});
