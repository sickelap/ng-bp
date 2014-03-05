angular.module("app.pages.role2.dashboard", [
    ])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("role2-dashboard", {
            parent: "role2",
            url: "/dashboard",
            views: {
                layout: {
                    templateUrl: "pages/role2/dashboard/dashboard.tpl.html",
                    controller: "Role2DashboardController",
                    resolve: {
                        /**
                         * Prepare injectable for the controller
                         */
                        users: function(UserResource){
                            return UserResource.query();
                        }
                    }
                }
            }
        });
    }])

    .controller("Role2DashboardController", ["$scope", "users", function($scope, users){
        $scope.users = users;
    }])

;