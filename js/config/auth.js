app.run(['$rootScope', '$location', 'LoginService',
    function ($rootScope, $location, LoginService) {
        $rootScope.$on('$routeChangeStart', function (event, newUrl) {

            if (newUrl.requireAuth && !LoginService.isLoggedIn()) {
                event.preventDefault();
                $location.path("/login");
            }

        });
    }]);