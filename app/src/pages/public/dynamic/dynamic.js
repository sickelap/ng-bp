angular.module("app.pages.public.dynamic", [])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("dynamic", {
            parent: "public",
            url: "/:slug",
            views: {
                layout: {
                    templateUrl: "pages/public/dynamic/dynamic.tpl.html",
                    controller: "DynamicController"
                }
            }
        });
    }])

    .controller("DynamicController", ["$scope", function($scope){
        console.log('DynamicController');
    }])

;