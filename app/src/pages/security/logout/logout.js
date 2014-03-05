angular.module("app.pages.security.logout", [])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("logout", {
            url: "/logout",
            views: {
                main: {
                    controller: ["$location", "AuthService", function($location, AuthService){
                        AuthService.logout();
                        $location.path("/");
                    }]
                }
            }
        });
    }])

;