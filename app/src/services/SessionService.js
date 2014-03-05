angular.module("app.services.session", [])

    .factory('SessionService', ['$cookieStore', function ($cookieStore) {

        var startSession = function (session) {
            clearSession();
            $cookieStore.put('session', session);
        };

        var currentSession = function () {
            return $cookieStore.get('session');
        };

        var getValue = function (key) {
            var session = currentSession();
            return (session) ? session[key] : null;
        };

        var setValue = function (key, val) {
            var session = currentSession();
            session[key] = val;
            $cookieStore.put('session', session);
        };

        var clearSession = function () {
            $cookieStore.remove('session');
        };

        /**
         * export
         */
        return {
            start: startSession,
            get: getValue,
            set: setValue,
            getAll: currentSession,
            clear: clearSession
        };
    }])

;