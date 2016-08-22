app.factory('LoginService', ['$q', '$window', '$resource', 'serverBasePath', 'RouteService', function ($q, $window, $resource, serverBasePath, RouteService) {
    var Auth = $resource(serverBasePath + '/auth', {}, {authenticate: {method: 'PUT'}});

    var service = {};

    var currentUser;

    service.isLoggedIn = function () {
        if (currentUser) {
            return true;
        } else {
            return false;
        }
    };

    service.login = function (user) {
        var def = $q.defer();

        Auth.authenticate(user).$promise
            .then(function (data, headers) {
                def.resolve();
            })
            .catch(function (err) {
                console.log(err);
                def.reject(err);
            });

        return def.promise;
    };

    service.logOut = function () {
        currentUser = null;
        //TODO: Limpar token

        RouteService.toLoginScreen();
    };

    service.rememberPassword = function (login) {
        var def = $q.defer();

        setTimeout(function () {
            def.success();
        }, 2000);

        return def.promise;
    };

    service.getCurrentUser = function () {
        if (currentUser) {
            return angular.copy(currentUser);
        } else {
            return null;
        }
    };

    return service;
}]);
