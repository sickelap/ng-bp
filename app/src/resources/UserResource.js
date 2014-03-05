angular.module("app.resources.user", [])

    .factory("UserResource", function ($resource) {
        return $resource('/api/user/:id', {id: '@id'});
    })

;