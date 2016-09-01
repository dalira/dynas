app.controller('SendController', ['$scope', 'RouteService',
    function ($scope, RouteService) {

        $scope.currentUser = [];
        $scope.users = [];

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

        };

        $scope.cancel = function () {
            RouteService.toMainScreen();
        };

    }]);
