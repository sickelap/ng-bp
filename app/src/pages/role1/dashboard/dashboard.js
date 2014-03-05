angular.module("app.pages.role1.dashboard", [
    ])

    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state("role1-dashboard", {
            parent: "role1",
            url: "/dashboard",
            views: {
                layout: {
                    templateUrl: "pages/role1/dashboard/dashboard.tpl.html",
                    controller: "Role1DashboardController",
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

    .controller("Role1DashboardController", ["$scope", "users", function($scope, users){
        $scope.users = users;
    }])

;