angular.module('dynas')
    .factory('GroupService', [function () {
        var service = {};

        //Cachear
        service.get = function () {
            return [
                {
                    'id': 1,
                    'name': 'Relacionamento'
                },
                {
                    'id': 2,
                    'name': 'Credenciamento'
                }
            ]
        };

        return service;
    }
    ]);
