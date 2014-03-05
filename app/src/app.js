angular.module("app", [
        "ui.router",
        "ngResource",
        "ngCookies",
        "app.services",
        "app.directives",
        "app.resources",
        "app.pages"
    ])

    .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }])

    .run(["$rootScope", "$location", "AuthService", function run($rootScope, $location, AuthService) {
        console.log('app:run');
        AuthService.init();
        $rootScope.currentUser = AuthService.currentUser();
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            if (toState.data && toState.data.role) {
                if (!AuthService.hasRole(toState.data.role)) {
                    $location.path('/login');
                }
            }
        });
    }])

    .controller("AppController", ["$scope", function($scope){

    }])

;