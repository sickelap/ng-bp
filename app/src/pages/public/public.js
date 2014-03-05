angular.module("app.pages.public", [
        "app.pages.public.home",
        "app.pages.public.dynamic"
    ])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("public", {
            abstract: true,
            views: {
                main: {
                    templateUrl: "pages/public/layout.tpl.html"
                }
            }
        });
    }])

;