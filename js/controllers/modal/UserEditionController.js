app.controller('UserEditionController', ['$scope', '$uibModalInstance', 'GroupService', 'user', 'onEdition',
        function ($scope, $uibModalInstance, GroupService, user, onEdition) {

            $scope.user = user;
            $scope.onEdition = onEdition;

            $scope.groups = GroupService.get();

            $scope.ok = function () {
                if ($scope.userEditForm.$valid) {
                    $uibModalInstance.close($scope.user);
                }
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

        }]);
