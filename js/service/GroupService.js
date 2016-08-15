app.factory('GroupService', ['$q', function ($q) {
        var service = {};

        var dummyValue = [
            {
                id: 1,
                name: 'Relacionamento',
                active: true
            },
            {
                id: 2,
                name: 'Credenciamento',
                active: false
            }
        ];

        service.get = function () {
            var def = $q.defer();

            setTimeout(function () {
                def.resolve(dummyValue);
            }, 2000);

            return def.promise;
        };

        service.create = function (group) {
            var def = $q.defer();

            setTimeout(function () {

                dummyValue.push(group);

                def.resolve();
            }, 2000);

            return def.promise;
        };

        service.save = function (group) {
            var def = $q.defer();

            setTimeout(function () {

                var index = dummyValue.findIndex(function (g) {
                    return g.id === group.id;
                });

                if (index >= 0) {
                    dummyValue[index] = group;
                } else {
                    dummyValue.push(group);
                }


                def.resolve();
            }, 2000);

            return def.promise;
        };

        return service;
    }
    ]);
