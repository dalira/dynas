app.factory('LoginService', ['$q', '$window', '$resource', '$window', 'serverBasePath', 'RouteService', 'UserService',
    function ($q, $window, $resource, $window, serverBasePath, RouteService, UserService) {

        var Auth = $resource(serverBasePath + '/auth/:user', {}, {
            authenticate: {
                method: 'PUT',
                interceptor: {
                    response: function (response) {
                        return response.headers()['authorization'];
                    }
                }
            },
            current: {
                method: 'GET',
                params: {user: 'user'}
            }
        });

        var service = {};

        var currentUser;

        service.isLoggedIn = function () {
            if ($window.localStorage.token) {
                return true;
            } else {
                return false;
            }
        };

        service.login = function (user) {
            var def = $q.defer();

            Auth.authenticate(user).$promise
                .then(function (authorization) {
                    $window.localStorage.token = authorization;
                })
                .then(service.updateCurrentUser)
                .then(function (user) {
                    currentUser = user;
                    def.resolve(user);
                })
                .catch(function (err) {
                    console.log(err);
                    def.reject(err);
                });

            return def.promise;
        };

        service.logOut = function () {
            currentUser = null;
            $window.localStorage.token = null;

            RouteService.toLoginScreen();
        };

        service.rememberPassword = function (login) {
            var def = $q.defer();

            //TODO
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

        service.updateCurrentUser = function () {
            var promise;
            if (currentUser) {
                promise = $q.resolve(this.user);
            } else {
                var def = $q.defer();

                Auth.current().$promise
                    .then(function (user) {
                        currentUser = user;
                        def.resolve(user);
                    })
                    .catch(function () {
                        def.reject();
                    });

                promise = def.promise;
            }

            return promise;
        };

        return service;
    }]);
