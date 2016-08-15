app.factory('SprintService', ['$q', function ($q) {
        var service = {};

        const regPerPage = 20;

        var dummyValue = {
            currentPage: 1,
            totalItems: 2,
            items: [
                {
                    id: 1,
                    name: 'Stairway to Heaven',
                    begin: new Date(),
                    end: new Date(),
                    group: {
                        id: 1,
                        name: 'Relacionamento'
                    },
                    value: '1000'
                },
                {
                    id: 2,
                    name: 'Back in Black',
                    begin: new Date(),
                    end: new Date(),
                    group: {
                        id: 1,
                        name: 'Relacionamento'
                    },
                    value: '500'
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
