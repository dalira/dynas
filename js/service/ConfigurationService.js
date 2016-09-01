app.factory('ConfigurationService', ['$q', '$resource', 'serverBasePath', function ($q, $resource, serverBasePath) {
        var service = {};

        var Configuration = $resource(serverBasePath + '/configuracao', null, {
            update : {method : 'PUT'}
        });

        service.get = function () {
            var def = $q.defer();

            Configuration.get().$promise
                .then(function (configuration) {
                    def.resolve(configuration);
                })
                .catch(function (err) {
                    console.log(err);
                    def.reject();
                });

            return def.promise;
        };

        service.save = function (configuration) {
            var def = $q.defer();

            Configuration.update({}, configuration).$promise
                .then(function (newConfiguration) {
                    def.resolve(newConfiguration);
                })
                .catch(function (err) {
                    console.log(err);
                    def.reject();
                });

            return def.promise;
        };

        return service;
    }]);
