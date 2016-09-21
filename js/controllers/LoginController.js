app.controller('LoginController', ['$scope', 'LoginService', 'RouteService', 'blockUI',
    function ($scope, LoginService, RouteService, blockUI) {

        $scope.user = {};

        $scope.login = function () {
            var invalid = false;

            if (!($scope.user.login)) {
                $scope.loginForm.login.$setValidity('required', false);
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
            LoginService.login($scope.user)
                .then(function () {
                    blockUI.stop();
                    RouteService.toMainScreen();
                })
                .catch(function () {
                    blockUI.stop();
                });
        };

        $scope.rememberPassword = function () {
            $scope.loginForm.login.$setValidity('required', true);
            $scope.loginForm.password.$setValidity('required', true);

            var invalid = false;

            if (!($scope.user.login)) {
                $scope.loginForm.login.$setValidity('required', false);
            }

            if (invalid) {
                return;
            }

            LoginService.rememberPassword($scope.user.login)
                .then(function () {

                })
                .catch(function () {

                });
        };

    }]);
