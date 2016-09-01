app.factory('TransactionService', ['$q', '$resource', 'serverBasePath',
    function ($q, $resource, serverBasePath) {

        var Transaction = $resource(serverBasePath + '/transacoes/:_id',
            {_id: '@_id'},
            {
                create: {method: 'POST', params: {login: null}},
                update: {method: 'PUT'}
            });

        const regPerPage = 20;

        function query(filter, page) {
            var def = $q.defer();

            filter['_page'] = page;
            filter['_limit'] = regPerPage;

            Transaction.get(filter).$promise
                .then(function (transacoes) {
                    def.resolve(transacoes);
                })
                .catch(function (err) {
                    console.error(err);
                    def.reject();
                });

            return def.promise;
        }

        function create(transaction) {
            var def = $q.defer();

            Transaction.create(transaction).$promise
                .then(function (newTransaction) {
                    def.resolve(newTransaction);
                })
                .catch(function (err) {
                    console.error(err);
                    def.reject();
                });

            return def.promise;
        }

        function save(transaction) {
            var def = $q.defer();

            Transaction.update(transaction).$promise
                .then(function (newTransaction) {
                    def.resolve(newTransaction);
                })
                .catch(function (err) {
                    console.error(err);
                    def.reject();
                });

            return def.promise;
        }

        return {
            query: query,
            create: create,
            save: save
        }
    }]);
