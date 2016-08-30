app.controller('UserController', ['$scope', '$uibModal', 'blockUI', 'GroupService', 'UserService',
        function ($scope, $uibModal, blockUI, GroupService, UserService) {

            var panelUserBlock = blockUI.instances.get('panel-users');

            //Filtros
            $scope.showFilter = false;
            $scope.groups = [];
            $scope.filter = {
                active: true
            };

            $scope.changeFilterVisibility = function () {
                $scope.showFilter = !$scope.showFilter;
            };

            $scope.limparFiltros = function () {
                $scope.filter = {
                    active: true
                };
                $scope.currentPage = 1;

                $scope.query();
            };

            //Paginacao
            $scope.currentPage = 1;
            $scope.totalItems = 0;
            $scope.users = [];

            $scope.query = function () {

                panelUserBlock.start();

                var filter = angular.copy($scope.filter);
                if (!filter["active"]) {
                    delete filter["active"];
                }

                var promisePage = UserService.query(filter, $scope.currentPage);

                promisePage
                    .then(function (page) {
                        $scope.currentPage = page.currentPage;
                        $scope.totalItems = page.totalItems;
                        $scope.users = page.items;

                        panelUserBlock.stop();
                        //TODO: Notificar sucesso
                    })
                    .catch(function () {
                        //TODO: Tratar erros
                    });
            };

            //Actions
            $scope.editUser = function (user) {
                openModalUser(user);
            };

            $scope.newUser = function () {
                openModalUser();
            };

            var openModalUser = function (user) {

                var onEdition = (user);
                user = user || {};

                var modalInstance = $uibModal.open({
                    templateUrl: 'partials/modal/user-edit.html',
                    controller: 'UserEditionController',
                    size: 'lg',
                    backdrop: 'static',
                    resolve: {
                        user: angular.copy(user),
                        onEdition: onEdition
                    }
                });

                modalInstance.result.then(function (user) {
                    panelUserBlock.start();

                    var promise;
                    if (onEdition) {
                        promise = UserService.save(user);
                    } else {
                        promise = UserService.create(user);
                    }

                    promise
                        .then(function () {
                            $scope.query();
                            panelUserBlock.stop();
                        })
                        .catch(function () {
                            //TODO: Tratar erro
                        });
                });
            };

            //Chamadas de criação de controller

            //Inicializaço dos sprints
            $scope.query();

            //Inicialização do campo de filtro de grupo
            $scope.groups = GroupService.get();

        }]);
