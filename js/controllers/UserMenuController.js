app.controller('UserMenuController', ['$scope', 'RouteService', 'LoginService',
    function ($scope, RouteService, LoginService) {

        LoginService.getCurrentUser()
            .then(function (user) {
                $scope.identity = user;
            })
            .catch(function () {
                //TODO: Tratar erro
            });

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
