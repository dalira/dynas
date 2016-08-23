app.controller('ConfigurationController', ['$scope', '$uibModal', 'blockUI', 'ConfigurationService', 'GroupService',
        function ($scope, $uibModal, blockUI, ConfigurationService, GroupService) {

            var panelConfigurationBlock = blockUI.instances.get('panel-configuration');
            var panelGroupBlock = blockUI.instances.get('panel-group');

            var backupConfiguration = {};
            $scope.configuration = {};

            $scope.groups = [];

            $scope.showCommands = function () {
                return !angular.equals($scope.configuration, backupConfiguration);
            };

            $scope.save = function () {
                panelConfigurationBlock.start();
                var promise = ConfigurationService.save($scope.configuration);

                promise.then(function (configuration) {
                    backupConfiguration = angular.copy(configuration);
                    $scope.configuration = configuration;
                    panelConfigurationBlock.stop();
                });

                promise.catch(function () {
                    //TODO: Tratar erros
                });

            };

            $scope.cancel = function () {
                $scope.loadConfig();
            };

            $scope.loadConfig = function () {
                panelConfigurationBlock.start();
                var promise = ConfigurationService.get();

                promise.then(function (configuration) {
                    //Sucesso
                    $scope.configuration = configuration;
                    backupConfiguration = angular.copy(configuration);

                    panelConfigurationBlock.stop();
                });
                promise.catch(function () {
                    //TODO: Tratar erro
                });
            };

            $scope.loadGroups = function () {
                panelGroupBlock.start();

                var promise = GroupService.get();

                promise.then(function (groups) {
                    $scope.groups = groups;
                    panelGroupBlock.stop();
                });

                promise.catch(function () {
                    //TODO: Tratar erro
                });
            };

            //Actions
            $scope.editGroup = function (group) {
                openModal(group);
            };

            $scope.newGroup = function () {
                openModal();
            };

            var openModal = function (group) {

                var onEdition = (group);
                group = group || {};

                var modalInstance = $uibModal.open({
                    templateUrl: 'partials/modal/group-edit.html',
                    controller: 'GroupEditionController',
                    size: 'lg',
                    backdrop: 'static',
                    resolve: {
                        group: angular.copy(group),
                        onEdition: onEdition
                    }
                });

                modalInstance.result.then(function () {
                    $scope.loadGroups();
                });
            };
        }]);
