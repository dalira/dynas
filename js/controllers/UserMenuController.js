app.controller('UserMenuController', ['$scope', 'RouteService', 'LoginService',
    function ($scope, RouteService, LoginService) {

        $scope.identity = function () {
            return LoginService.getCurrentUser();
        };

        $scope.showMenu = function () {
            return RouteService.isSprintScreenActive() ||
                RouteService.isUserScreenActive() ||
                RouteService.isTransactionScreenActive() ||
                RouteService.isConfigurationScreenActive();
        };

        $scope.logOut = function () {
            LoginService.logOut();
        };

    }]);
