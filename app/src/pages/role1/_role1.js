angular.module("app.pages.role1", [
        "app.pages.role1.dashboard"
    ])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("role1", {
            abstract: true,
            url: "/role1",
            views: {
                main: {
                    templateUrl: "pages/role1/layout.tpl.html"
                }
            },
            data: {
                role: 'role1'
            }
        });
    }])

;