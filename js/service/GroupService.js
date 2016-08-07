angular.module('dynas')
    .factory('GroupService', [function () {
        var service = {};

        service.get = function () {
            return [
                {
                    'id': 1,
                    'name': 'Stairway to Heaven'
                },
                {
                    'id': 2,
                    'name': 'Back in Black'
                }
            ]
        };

        return service;
    }
    ]);
