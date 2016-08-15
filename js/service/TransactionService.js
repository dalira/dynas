app.factory('TransactionService', ['$q', function ($q) {
        var service = {};

        const regPerPage = 20;

        var dummyValue = {
            currentPage: 1,
            totalItems: 2,
            items: [
                {
                    from: {
                        id: 1,
                        email: 'dal.lira@gmail.com',
                        name: 'Diego',
                        admin: false,
                        group: {
                            id: 1,
                            name: 'Relacionamento'
                        },
                        active: true
                    },
                    to: {
                        id: 2,
                        email: 'dal_lira@hotmail.com',
                        name: 'André',
                        admin: false,
                        group: {
                            id: 1,
                            name: 'Relacionamento'
                        },
                        active: true
                    },
                    value: 100,
                    date: new Date(),
                    sprint: {
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
                    motive: "Motivo"
                },
                {
                    from: {
                        id: 1,
                        email: 'dal.lira@gmail.com',
                        name: 'Diego',
                        admin: false,
                        group: {
                            id: 1,
                            name: 'Relacionamento'
                        },
                        active: true
                    },
                    to: {
                        id: 2,
                        email: 'dal_lira@hotmail.com',
                        name: 'André',
                        admin: false,
                        group: {
                            id: 1,
                            name: 'Relacionamento'
                        },
                        active: true
                    },
                    value: 1000,
                    date: new Date(),
                    sprint: {
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
                    motive: "Motivo"
                }
            ],
            totalizer: {
                value: 1100
            }
        };

        service.query = function (filter, page) {
            var def = $q.defer();

            setTimeout(function () {
                def.resolve(dummyValue);
            }, 2000);

            return def.promise;
        };

        service.create = function (transaction) {
            var def = $q.defer();

            setTimeout(function () {
                dummyValue.items.push(transaction);
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
