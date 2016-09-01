app.factory('RouteService', ['sprintRoute', 'userRoute', 'transactionRoute', 'configurationRoute', 'loginRoute', '$location',
        function (sprintRoute, userRoute, transactionRoute, configurationRoute, loginRoute, $location) {
            var service = {};

            service.toMainScreen = function () {
                toSprintScreen();
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

            service.toLoginScreen = function () {
                $location.path(loginRoute);
            };

            return service;
        }]);