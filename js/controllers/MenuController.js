angular.module('dynas')
    .controller('MenuController', ['$scope', 'RouteService', function ($scope, RouteService) {

        $scope.showMenu = function () {
            return RouteService.isOnProtectedRoute();
        };

        $scope.toSprintScreen = function () {
            RouteService.toSprintScreen();
        };

        $scope.isSprintScreenActive = function () {
            return RouteService.isSprintScreenActive();
        };

        $scope.toUserScreen = function () {
            RouteService.toUserScreen();
        };

        $scope.isUserScreenActive = function () {
            return RouteService.isUserScreenActive();
        };

        $scope.toTransactionScreen = function () {
            RouteService.toTransactionScreen();
        };

        $scope.isTransactionScreenActive = function () {
            return RouteService.isTransactionScreenActive();
        };

        $scope.toConfigurationScreen = function () {
            RouteService.toConfigurationScreen();
        };

        $scope.isConfigurationScreenActive = function () {
            return RouteService.isConfigurationScreenActive();
        };
    }]);
