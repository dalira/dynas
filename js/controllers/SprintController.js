angular.module('dynas')
    .controller('SprintController', ['$scope', '$uibModal', 'SprintService', 'GroupService', 'blockUI',
        function ($scope, $uibModal, SprintService, GroupService, blockUI) {

            var panelSprintBlock = blockUI.instances.get('panel-sprints');

            //Filtros
            $scope.showFilter = false;
            $scope.groups = [];
            $scope.filter = {};

            $scope.changeFilterVisibility = function () {
                $scope.showFilter = !$scope.showFilter;
            };

            $scope.query = function () {
                var promisePage = SprintService.query($scope.filter, $scope.currentPage);

                panelSprintBlock.start();

                promisePage
                    .then(function (page) {
                        $scope.currentPage = page.currentPage;
                        $scope.totalItems = page.totalItems;
                        $scope.sprints = page.items;

                        panelSprintBlock.stop();
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
            $scope.sprints = [];

            //Actions
            $scope.editSprint = function (sprint) {
                openModal(sprint);
            };

            $scope.newSprint = function () {
                openModal();
            };

            var openModal = function (sprint) {

                var onEdition = (sprint);
                sprint = sprint || {};

                var modalInstance = $uibModal.open({
                    templateUrl: 'partials/modal/sprint-edit.html',
                    controller: 'SprintEditionController',
                    size: 'lg',
                    backdrop: 'static',
                    resolve: {
                        sprint: sprint,
                        onEdition: onEdition
                    }
                });

                modalInstance.result.then(function (sprint) {
                    panelSprintBlock.start();

                    var promise;
                    if (onEdition) {
                        promise = SprintService.save(sprint);
                    } else {
                        promise = SprintService.create(sprint);
                    }

                    promise
                        .then(function () {
                            $scope.query();
                            panelSprintBlock.stop();
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
