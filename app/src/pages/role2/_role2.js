angular.module("app.pages.role2", [
        "app.pages.role2.dashboard"
    ])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("role2", {
            abstract: true,
            url: "/role2",
            views: {
                main: {
                    templateUrl: "pages/role2/layout.tpl.html"
                }
            },
            data: {
                role: 'role2'
            }
        });
    }])

;