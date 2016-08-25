app.factory('SprintService', ['$q', '$resource', 'serverBasePath', function ($q, $resource, serverBasePath) {
    var service = {};

    var Sprint = $resource(serverBasePath + '/sprints/:id',
        {id: '@id'},
        {
            create: {method: 'POST'},
            save: {method: 'PUT'}
        });

    const regPerPage = 2;

    service.query = function (filter, page) {
        var def = $q.defer();

        filter['_page'] = page;
        filter['_limit'] = regPerPage;

        Sprint.get(filter).$promise
            .then(function (sprints) {
                def.resolve(sprints);
            })
            .catch(function (err) {
                console.log(err);
                def.reject();
            });

        return def.promise;
    };

    service.create = function (sprint) {
        var def = $q.defer();

        Sprint.create(sprint).$promise
            .then(function (sprints) {
                def.resolve(sprints);
            })
            .catch(function (err) {
                def.reject(err);
            });

        return def.promise;
    };

    service.save = function (sprint) {
        var def = $q.defer();

        Sprint.save({id: sprint._id}, sprint).$promise
            .then(function () {
                def.resolve();
            })
            .catch(function (err) {
                def.reject(err);
            });

        return def.promise;
    };

    return service;
}]);
