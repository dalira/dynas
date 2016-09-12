app.factory('UserService', ['$q', '$resource', 'serverBasePath', function ($q, $resource, serverBasePath) {
    var service = {};

    var User = $resource(serverBasePath + '/usuarios/:login',
        {login: '@login'},
        {
            create: {method: 'POST', params: {login: null}},
            update: {method: 'PUT'}
        });

    const regPerPage = 20;

    function get(login) {
        var def = $q.defer();

        User.get({login: login}).$promise
            .then(function (usuario) {
                def.resolve(usuario);
            })
            .catch(function (err) {
                console.error(err);
                def.reject();
            });

        return def.promise;
    }

    function getFromGroup(group) {
        var def = $q.defer();

        User.get({'group': group._id}).$promise
            .then(function (page) {
                def.resolve(page.items);
            })
            .catch(function (err) {
                console.error(err);
                def.reject();
            });

        return def.promise;
    }

    function query(filter, page) {
        var def = $q.defer();

        filter['_page'] = page;
        filter['_limit'] = regPerPage;

        User.get(filter).$promise
            .then(function (usuarios) {
                def.resolve(usuarios);
            })
            .catch(function (err) {
                console.error(err);
                def.reject();
            });

        return def.promise;
    }

    function create(user) {
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
    }

    function save(user) {
        var def = $q.defer();

        User.update(user).$promise
            .then(function (newUser) {
                def.resolve(newUser);
            })
            .catch(function (err) {
                console.error(err);
                def.reject();
            });

        return def.promise;
    }

    return {
        get: get,
        getFromGroup: getFromGroup,
        query: query,
        create: create,
        save: save
    };
}]);
