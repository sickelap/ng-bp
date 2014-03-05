angular.module("app.pages.public.home", [])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("home", {
            parent: "public",
            url: "/",
            views: {
                layout: {
                    templateUrl: "pages/public/home/home.tpl.html",
                    controller: "HomeController"
                }
            }
        });
    }])

    .controller("HomeController", ["$scope", function($scope){
        console.log('HomeController');
    }])

;