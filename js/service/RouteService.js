angular.module('dynas')
    .factory('RouteService', ['sprintRoute', 'userRoute', 'transactionRoute', 'configurationRoute', 'loginRoute', '$location',
        function (sprintRoute, userRoute, transactionRoute, configurationRoute, loginRoute, $location) {
            var service = {};

            const protectedRoutes = [sprintRoute, userRoute, transactionRoute, configurationRoute];

            service.isOnProtectedRoute = function () {
                return protectedRoutes.indexOf($location.path()) > -1;
            };

            service.isSprintScreenActive = function () {
                return $location.path() === sprintRoute;
            };

            service.toSprintScreen = function () {
                $location.path(sprintRoute);
            };

            service.isUserScreenActive = function () {
                return $location.path() === userRoute;
            };

            service.toUserScreen = function () {
                $location.path(userRoute);
            };

            service.isTransactionScreenActive = function () {
                return $location.path() === transactionRoute;
            };

            service.toTransactionScreen = function () {
                $location.path(transactionRoute);
            };

            service.toConfigurationScreen = function () {
                $location.path(configurationRoute);
            };

            service.isConfigurationScreenActive = function () {
                return $location.path() === configurationRoute;
            };

            return service;
        }]);