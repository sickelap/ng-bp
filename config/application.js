/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can find the parent object in: node_modules/lineman/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {

    /**
     * Configure API server to proxy not stubbed (in server.js) endpoints
     */
    server: {
        pushState: true, // enable pushState
        apiProxy: {
            enabled: true,
            prefix: 'api', // prefix all requests with /api
            host: 'http://192.168.56.101', // IP address to vagrant
            port: 80
        }
    },

    ngtemplates: {
        app: {
            options: {
                base: "app/src"
            },
            src: "app/**/*.tpl.html",
            dest: "<%= files.ngtemplates.dest %>"
        }
    },

    pages: {
        dev: {
            files: {
                "generated/index.html": "app/src/static/index.html"
            }
        },
        dist: {
            files: {
                "dist/index.html": "app/src/static/index.html"
            }
        }
    },

    watch: {
        ngtemplates: {
            files: "app/**/*.tpl.html",
            tasks: ["ngtemplates", "pages:dev", "concat_sourcemap:js"]
        }
    },

    enableAssetFingerprint: true

});
