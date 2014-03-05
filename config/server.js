/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {

    drawRoutes: function (app) {

        var devUsers = [
            {
                user: { id: 1, role: 'role1', home: '/role1/dashboard' },
                profile: { name: 'Iron Man', email: 'iron@man.dev' },
                token: '7996bb521be3b84445eb62a493a479b3'
            },
            {
                user: { id: 2, role: 'role1', home: '/role1/dashboard' },
                profile: { name: 'Captain America', email: 'captain@america.dev' },
                token: '49b3dda2e5e761aaa9a7cb7d55cd1232'
            },
            {
                user: { id: 3, role: 'role2', home: '/role2/dashboard' },
                profile: { name: 'Cat Woman', email: 'cat@woman.dev' },
                token: '1ddc985ac050c08d99521d215abd0381'
            }
        ];

        app.post('/api/login', function (req, res) {
            res.json(devUsers[0]);
        });

        app.post('/api/logout', function (req, res) {
            res.json({ message: 'logging out!'});
        });

        app.post('/api/signup', function (req, res) {
            devUsers.push({
                user: { id: devUsers.length, role: 'role2', home: '/role2/dashboard' },
                profile: { name: req.body.firstName + ' ' + req.body.lastName, email: req.body.email },
                token: '1ddc985ac050c08d99521d215abd0381'
            });
            res.json(devUsers[devUsers.length - 1]);
        });

        app.get('/api/user', function (req, res) {
            var token = req.get('API-Token');
            if (!token) {
                res.send(401);
                return;
            }

            res.json(devUsers);
        });

        app.get('/api/user/:id', function (req, res) {
            var token = req.get('API-Token');
            if (!token) {
                res.send(401);
                return;
            }

            var user = null;
            devUsers.forEach(function (item) {
                if (req.params.id === 'current' && item.token === token) {
                    user = item;
                } else if (req.params.id == item.user.id) {
                    user = item;
                }
            });

            if (!user) {
                res.send(404);
            }

            res.json(user);
        });
    }
};
