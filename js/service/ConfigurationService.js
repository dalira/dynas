app.factory('ConfigurationService', ['$q', function ($q) {
        var service = {};

        var dummyValue = {
            initialValue: 2000,
            duration: 'MENSAL'
        };

        service.get = function () {
            var def = $q.defer();

            setTimeout(function () {
                def.resolve(dummyValue);
            }, 2000);

            return def.promise;
        };

        service.save = function (configuration) {
            var def = $q.defer();

            setTimeout(function () {
                dummyValue = configuration;

                def.resolve(configuration);
            }, 2000);

            return def.promise;
        };

        return service;
    }]);
