app.factory('UserService', ['$q', '$resource', 'serverBasePath', function ($q, $resource, serverBasePath) {
        var service = {};

        var User = $resource(serverBasePath + '/usuarios/:login',
            {login: '@login'},
            {create : {method : 'POST'},
             update: {method: 'PUT'}});

        const regPerPage = 20;

        service.get = function (login) {
            var def = $q.defer();

            User.get({login : login}).$promise
                .then(function (usuario) {
                    def.resolve(usuario);
                })
                .catch(function (err) {
                    console.error(err);
                    def.reject();
                });

            return def.promise;
        };

        service.query = function (filter, page) {
            var def = $q.defer();

            User.query(filter).$promise
                .then(function (usuarios) {
                    def.resolve(usuarios);
                })
                .catch(function (err) {
                    console.error(err);
                    def.reject();
                });

            return def.promise;
        };

        service.create = function (user) {
            var def = $q.defer();

            User.create(user).$promise
                .then(function (newUser) {
                    def.resolve(newUser);
                })
                .catch(function (err) {
                    console.error(err);
                    def.reject();
                });

            return def.promise;
        };

        service.save = function (sprint) {
            var def = $q.defer();

            User.update().$promise
                .then(function (newUser) {
                    def.resolve(newUser);
                })
                .catch(function (err) {
                    console.error(err);
                    def.reject();
                });

            return def.promise;
        };

        return service;
    }]);
