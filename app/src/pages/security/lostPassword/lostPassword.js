angular.module('app.pages.security.lostPassword', [])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("lost-password", {
            url: "/lost-password",
            views: {
                main: {
                    templateUrl: "pages/security/lostPassword/lostPassword.tpl.html",
                    controller: "LostPasswordController"
                }
            }
        });
    }])

    .controller("LostPasswordController", ["$scope", function($scope){
        console.log("LostPasswordController");
    }])

;