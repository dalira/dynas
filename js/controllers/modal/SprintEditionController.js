app.controller('SprintEditionController', ['$scope', '$uibModalInstance', 'sprint', 'onEdition',
        function ($scope, $uibModalInstance, sprint, onEdition) {

            $scope.datePopUpsState = {};

            $scope.alterDatePopUp = function (name) {
                $scope.datePopUpsState[name] = !$scope.datePopUpsState[name];
            };

            $scope.sprint = sprint;
            $scope.onEdition = onEdition;

            $scope.groups = [
                {   id: '1',
                    name: 'Relacionamento'
                },
                {
                    id: '2',
                    name: 'Credenciamento'
                }
            ];

            $scope.ok = function () {
                if ($scope.sprintEditForm.$valid) {
                    $uibModalInstance.close($scope.sprint);
                }
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

    }]);
