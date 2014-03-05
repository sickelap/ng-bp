angular.module('app.pages.security.signup', [])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("signup", {
            url: "/signup",
            views: {
                main: {
                    templateUrl: "pages/security/signup/signup.tpl.html",
                    controller: "SignupController"
                }
            }
        });
    }])

    .controller("SignupController", ["$scope", "$location", "AuthService", function($scope, $location, AuthService){
        $scope.formData = {};

        $scope.signup = function(){
            AuthService.signup($scope.formData).then(function(response){
                $location.path(response.user.home); // or maybe redirect to email validation page ?
            });
        };
    }])

;