app.run(['$rootScope', '$location', 'LoginService',
    function ($rootScope, $location, LoginService) {
        $rootScope.$on('$routeChangeStart', function (event, newUrl) {

            //TODO: Remover o false
            if (false && newUrl.requireAuth && !LoginService.isLoggedIn()) {
                event.preventDefault();
                $location.path("/login");
            }

        });
    }]);