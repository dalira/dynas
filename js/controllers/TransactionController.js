app.controller('TransactionController', ['$scope', '$uibModal', 'blockUI', 'TransactionService',
        function ($scope, $uibModal, blockUI, TransactionService) {

            $scope.datePopUpsState = {};

            $scope.alterDatePopUp = function (name) {
                $scope.datePopUpsState[name] = !$scope.datePopUpsState[name];
            };

            var panelTransactionBlock = blockUI.instances.get('panel-transactions');

            //Filtros
            $scope.showFilter = false;
            $scope.groups = [];
            $scope.filter = {};

            $scope.changeFilterVisibility = function () {
                $scope.showFilter = !$scope.showFilter;
            };

            $scope.query = function () {

                panelTransactionBlock.start();

                var promisePage = TransactionService.query($scope.filter, $scope.currentPage);

                promisePage
                    .then(function (page) {
                        $scope.currentPage = page.currentPage;
                        $scope.totalItems = page.totalItems;
                        $scope.transactions = page.items;
                        $scope.totalTransactions = page.totalizer.value;

                        panelTransactionBlock.stop();
                        //TODO: Notificar sucesso
                    })
                    .catch(function () {
                        //TODO: Tratar erros
                    });
            };

            $scope.limparFiltros = function () {
                $scope.filter = {};
                $scope.currentPage = 1;

                $scope.query();
            };

            //Paginacao
            $scope.currentPage = 1;
            $scope.totalItems = 0;
            $scope.transactions = [];
            $scope.totalTransactions = 0;

            //Chamadas de criação de controller

            //Inicializaço dos sprints
            $scope.query();

        }]);
