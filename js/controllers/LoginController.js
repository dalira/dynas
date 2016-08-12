angular.module('dynas')
    .controller('LoginController', ['$scope', 'LoginService', 'RouteService', 'blockUI',
        function ($scope, LoginService, RouteService, blockUI) {

            $scope.user = {};

            $scope.login = function () {
                var invalid = false;

                if (!($scope.user.username)) {
                    $scope.loginForm.username.$setValidity('required', false);
                    invalid = true;
                }
                if (!($scope.user.password)) {
                    $scope.loginForm.password.$setValidity('required', false);
                    invalid = true;
                }

                if (invalid) {
                    return;
                }

                blockUI.start();
                var promise = LoginService.login($scope.user);

                promise.then(function () {
                    blockUI.stop();
                    RouteService.toSprintScreen();
                });

                promise.catch(function () {
                    blockUI.stop();
                });
            };

            $scope.rememberPassword = function () {
                $scope.loginForm.username.$setValidity('required', true);
                $scope.loginForm.password.$setValidity('required', true);

                var invalid = false;

                if (!($scope.user.login)) {
                    $scope.loginForm.username.$setValidity('required', false);
                }

                if (invalid) {
                    return;
                }

                var promise = LoginService.rememberPassword($scope.user.username);

                promise.then(function () {

                });

                promise.catch(function () {

                });
            };

        }]);
