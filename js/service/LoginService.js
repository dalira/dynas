angular.module('dynas')
    .factory('LoginService', ['$q', '$window', function ($q, $window) {
        var service = {};

        service.isLoggedIn = function () {
            if ($window.sessionStorage.token) {
                return true;
            } else {
                return false;
            }
        };

        service.login = function (user) {
            var def = $q.defer();

            setTimeout(function () {

                var usuario = {
                    username: 'dalira',
                    name: 'Diego André Lira',
                    group: {
                        id: 1,
                        name: 'Relacionamento'
                    },
                    admin: false
                };

                angular.module('dynas').value('identity', usuario);

                def.resolve(usuario);
            }, 2000);

            return def.promise;
        };

        service.rememberPassword = function (login) {
            var def = $q.defer();

            setTimeout(function () {
                def.success();
            }, 2000);

            return def.promise;
        };

        return service;
    }]);
