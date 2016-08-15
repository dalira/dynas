app.factory('UserService', ['$q', function ($q) {
        var service = {};

        const regPerPage = 20;

        var dummyValue = {
            currentPage: 1,
            totalItems: 2,
            items: [
                {
                    id: 1,
                    name: 'Diego',
                    active: true,
                    group: {
                        id: 1,
                        name: 'Relacionamento'
                    }
                },
                {
                    id: 2,
                    name: 'André',
                    active: false,
                    group: {
                        id: 2,
                        name: 'Credenciamento'
                    }
                },
                {
                    id: 3,
                    name: 'Lira',
                    active: true,
                    group: {
                        id: 1,
                        name: 'Relacionamento'
                    }
                }
            ]
        };

        service.query = function (filter, page) {
            var def = $q.defer();

            setTimeout(function () {
                def.resolve(dummyValue);
            }, 2000);

            return def.promise;
        };

        service.create = function (sprint) {
            var def = $q.defer();

            setTimeout(function () {
                dummyValue.items.push(sprint);
                dummyValue.totalItems = dummyValue.totalItems + 1;

                def.resolve();
            }, 2000);

            return def.promise;
        };

        service.save = function (sprint) {
            var def = $q.defer();

            setTimeout(function () {
                var index = dummyValue.items.findIndex(function (s) {
                    return s.id === sprint.id;
                });
                dummyValue.items[index] = sprint;

                def.resolve();
            }, 2000);

            return def.promise;
        };

        return service;
    }]);
