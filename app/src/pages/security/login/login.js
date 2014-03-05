angular.module('app.pages.security.login', [])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("login", {
            url: "/login",
            views: {
                main: {
                    templateUrl: "pages/security/login/login.tpl.html",
                    controller: "LoginController"
                }
            }
        });
    }])

    .controller("LoginController", ["$scope", "$location", "AuthService", function($scope, $location, AuthService){
        $scope.formData = {
            email: 'email@email.com',
            password: 'pass'
        };

        $scope.login = function(){
            AuthService.login($scope.formData).then(function(response){
                $location.path(response.user.home);
            });
        };
    }])

;