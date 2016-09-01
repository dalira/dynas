app.factory('RouteService', ['mainRoute', 'sendRoute', 'questionRoute', 'loginRoute', '$location',
        function (mainRoute, sendRoute, questionRoute, loginRoute, $location) {
            var service = {};

            service.toMainScreen = function () {
                $location.path(mainRoute);
            };

            service.toSendScreen = function () {
                $location.path(sendRoute);
            };

            service.toQuestionScreen = function () {
                $location.path(questionRoute);
            };

            service.toLoginScreen = function () {
                $location.path(loginRoute);
            };

            return service;
        }]);