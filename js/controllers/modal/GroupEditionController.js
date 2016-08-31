app.controller('GroupEditionController', ['$scope', '$uibModalInstance', 'GroupService', 'group', 'onEdition',
        function ($scope, $uibModalInstance, GroupService, group, onEdition) {

            $scope.group = group;
            $scope.onEdition = onEdition;

            $scope.ok = function () {
                if ($scope.groupEditForm.$valid) {

                    var promise;
                    if (onEdition) {
                        promise = GroupService.save($scope.group);
                    } else {
                        promise = GroupService.create($scope.group);
                    }

                    promise.then(function () {
                        //TODO: Mensagem de sucesso
                        $uibModalInstance.close($scope.user);
                    });

                    promise.catch(function () {
                        //TODO: Tratar erro
                    });

                }
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

        }]);
