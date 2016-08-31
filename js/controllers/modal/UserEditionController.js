app.controller('UserEditionController', ['$scope', '$uibModalInstance', 'GroupService', 'user', 'onEdition',
        function ($scope, $uibModalInstance, GroupService, user, onEdition) {

            $scope.user = user;
            $scope.onEdition = onEdition;

            GroupService.get()
                .then(function (grupos) {
                    $scope.groups = grupos;
                })
                .catch(function () {
                    //TODO:  Tratar erros
                });

            $scope.ok = function () {
                if ($scope.userEditForm.$valid) {
                    $uibModalInstance.close($scope.user);
                }
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

        }]);
