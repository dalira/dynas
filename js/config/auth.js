app.factory('tokenAuthInterceptor', ['$q', '$window',
    function ($q, $window) {
        var interceptor = {};

        interceptor.request = function (config) {
            // enviar o token na requisição
            config.headers = config.headers || {};
            if ($window.localStorage.token) {
                config.headers['authorization'] = $window.localStorage.token;
            }
            return config;
        };

        return interceptor;
    }])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('tokenAuthInterceptor');
    }])
    .run(['$rootScope', '$location', 'LoginService', 'RouteService',
        function ($rootScope, $location, LoginService, RouteService) {
            $rootScope.$on('$routeChangeStart', function (event, newUrl) {

                if (LoginService.isLoggedIn()) {
                    LoginService.getCurrentUser()
                        .then(function () {
                            if (newUrl.originalPath === "/login") {
                                RouteService.toMainScreen();
                            }
                        })
                        .catch(function () {
                            RouteService.toLoginScreen();
                        });
                } else {
                    RouteService.toLoginScreen();
                }
            });
        }])
;
