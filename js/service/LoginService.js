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

        var currentUser;

        function isLoggedIn() {
            if ($window.localStorage.token) {
                return true;
            } else {
                return false;
            }
        }

        function login(user) {
            var def = $q.defer();

            Auth.authenticate(user).$promise
                .then(function (authorization) {
                    $window.localStorage.token = authorization;
                })
                .then(getCurrentUser)
                .then(function (user) {
                    currentUser = user;
                    def.resolve(user);
                })
                .catch(function (err) {
                    console.log(err);
                    def.reject(err);
                });

            return def.promise;
        }

        function logOut() {
            currentUser = null;
            $window.localStorage.token = null;

            RouteService.toLoginScreen();
        }

        function rememberPassword(login) {
            var def = $q.defer();

            //TODO
            setTimeout(function () {
                def.success();
            }, 2000);

            return def.promise;
        }

        function getCurrentUser() {
            var promise;
            if (currentUser) {
                promise = $q.resolve(currentUser);
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
        }

        return {
            isLoggedIn: isLoggedIn,
            login: login,
            logOut: logOut,
            rememberPassword: rememberPassword,
            getCurrentUser: getCurrentUser
        };
    }]);
