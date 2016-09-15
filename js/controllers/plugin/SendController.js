app.controller('SendController', ['$scope', 'RouteService', 'UserService', 'LoginService', 'TransactionService', 'blockUI',
    function ($scope, RouteService, UserService, LoginService, TransactionService, blockUI) {

        LoginService.getCurrentUser()
            .then(function (user) {
                $scope.identity = user;

                return UserService.getFromGroup(user.group);
            }).then(function (users) {
            $scope.users = users;
        });

        $scope.transaction = {
            value: 0
        };

        $scope.clearValue = function () {
            $scope.transaction.value = 0;
        };

        $scope.add100 = function () {
            $scope.transaction.value += 100;
        };

        $scope.add50 = function () {
            $scope.transaction.value += 50;
        };

        $scope.add20 = function () {
            $scope.transaction.value += 20;
        };

        $scope.add10 = function () {
            $scope.transaction.value += 10;
        };

        $scope.send = function () {
            if (!$scope.sendForm.$valid) {
                return;
            }

            blockUI.start();
            TransactionService.create($scope.transaction)
                .then(function () {
                    RouteService.toMainScreen();
                })
                .catch(function (err) {
                    //TODO: Mostrar erro
                    console.log(err);
                })
                .finally(function () {
                    blockUI.stop();
                });
        };

        $scope.cancel = function () {
            RouteService.toMainScreen();
        };

    }]);
