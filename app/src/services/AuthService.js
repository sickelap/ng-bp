angular.module("app.services.auth", [])

    .factory('AuthService', ['$rootScope', '$http', '$q', 'SessionService', function ($rootScope, $http, $q, SessionService) {

        var currentUser = function () {
            return SessionService.get('user');
        };

        var initFn = function () {
            var token = SessionService.get('token');
            if (token && !$http.defaults.headers.common['API-Token']) {
                $http.defaults.headers.common['API-Token'] = token;
            }
        };

        var isLoggedInFn = function () {
            return (SessionService.get('token') && SessionService.get('user'));
        };

        var hasRole = function (role) {
            var user = currentUser();
            return (user && user.role === role);
        };

        var loginFn = function (data) {
            var dfd = $q.defer();
            $http.post('/api/login', data).then(
                function success(response) {
                    SessionService.start(response.data);
                    $rootScope.currentUser = response.data.user;
                    $http.defaults.headers.common['API-Token'] = response.data.token;
                    dfd.resolve(response.data);
                },
                function failure(response) {
                    SessionService.clear();
                    delete $rootScope.currentUser;
                    dfd.resolve(response);
                }
            );
            return dfd.promise;
        };

        var logoutFn = function () {
            SessionService.clear();
            delete $rootScope.currentUser;
            delete $http.defaults.headers.common['API-Token'];
        };

        var signupFn = function (data) {
            var dfd = $q.defer();
            $http.post('/api/signup', data).then(
                function success(response) {
                    SessionService.start(response.data);
                    $rootScope.currentUser = response.data.user;
                    $http.defaults.headers.common['API-Token'] = response.data.token;
                    dfd.resolve(response.data);
                },
                function failure(response) {
                    SessionService.clear();
                    delete $rootScope.currentUser;
                    dfd.resolve(response);
                }
            );
            return dfd.promise;
        };

        /**
         * export
         */
        return {
            init: initFn,
            isLoggedIn: isLoggedInFn,
            login: loginFn,
            logout: logoutFn,
            signup: signupFn,
            hasRole: hasRole,
            currentUser: currentUser
        };
    }])

;