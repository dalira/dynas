app.factory('GroupService', ['$q', '$resource', 'serverBasePath', function ($q, $resource, serverBasePath) {
    var service = {};

    var Group = $resource(serverBasePath + '/grupos/:id',
        {id: '@id'},
        {
            update: {method: 'PUT'},
            create: {method: 'POST'}
        });

    service.get = function () {
        var def = $q.defer();

        Group.query({}).$promise
            .then(function (groups) {
                def.resolve(groups);
            })
            .catch(function (err) {
                console.error(err);
                def.reject();
            });

        return def.promise;
    };

    service.create = function (group) {
        var def = $q.defer();

        Group.create({}, group).$promise
            .then(function (newGroup) {
                def.resolve(newGroup);
            })
            .catch(function (err) {
                console.error(err);
                def.reject();
            });

        return def.promise;
    };

    service.save = function (group) {
        var def = $q.defer();

        Group.update({id: group._id}, group).$promise
            .then(function (newGroup) {
                def.resolve(newGroup);
            })
            .catch(function (err) {
                console.error(err);
                def.reject();
            });

        return def.promise;
    };

    return service;
}
]);
