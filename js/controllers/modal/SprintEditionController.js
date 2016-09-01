app.controller('SprintEditionController', ['$scope', '$uibModalInstance', 'GroupService', 'sprint', 'onEdition',
    function ($scope, $uibModalInstance, GroupService, sprint, onEdition) {

            $scope.datePopUpsState = {};

            $scope.alterDatePopUp = function (name) {
                $scope.datePopUpsState[name] = !$scope.datePopUpsState[name];
            };

            $scope.sprint = sprint;
            $scope.onEdition = onEdition;

        GroupService.get()
            .then(function (groups) {
                $scope.groups = groups;
            })
            .catch(function () {
                //TODO: Tratar erros
            });

            $scope.ok = function () {
                if ($scope.sprintEditForm.$valid) {
                    $uibModalInstance.close($scope.sprint);
                }
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

    }]);
