angular.module('dynas')
    .factory('SprintService', ['$q', function ($q) {
        var service = {};

        const regPerPage = 20;

        var dummyValue = {
            currentPage: 1,
            totalItems: 2,
            items: [
                {
                    'name': 'Stairway to Heaven',
                    'begin': new Date(),
                    'end': new Date(),
                    'group': {'name': 'Relacionamento'},
                    'value': '1000'
                },
                {
                    'name': 'Back in Black',
                    'begin': new Date(),
                    'end': new Date(),
                    'group': {'name': 'Relacionamento'},
                    'value': '500'
                }
            ]
        };

        service.query = function (filter, page) {
            var def = $q.defer();

            setTimeout(function(){
                def.resolve(dummyValue);
            }, 2000);

            return def.promise;
        };

        service.create = function (sprint) {
            sprint;
        };

        service.edit = function (sprint) {
            sprint;
        };

        return service;
    }]);
