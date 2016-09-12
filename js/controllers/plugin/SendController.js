app.controller('SendController', ['$scope', 'RouteService', 'UserService', 'LoginService',
    function ($scope, RouteService, UserService, LoginService) {

        LoginService.getCurrentUser()
            .then(function (user) {

                $scope.identity = user;
                $scope.transaction.from = user;

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
            console.log($scope.transaction);
        };

        $scope.cancel = function () {
            RouteService.toMainScreen();
        };

    }]);
