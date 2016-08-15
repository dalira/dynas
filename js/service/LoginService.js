app.factory('LoginService', ['$q', '$window', 'RouteService', function ($q, $window, RouteService) {
    var service = {};

    var currentUser;

    //TODO: Obter user quando token estiver em sessão

    service.isLoggedIn = function () {
        if (currentUser) {
            return true;
        } else {
            return false;
        }
    };

    service.login = function (user) {
        var def = $q.defer();

        setTimeout(function () {

            var usuario = {
                username: 'dalira',
                name: 'Diego André Lira',
                group: {
                    id: 1,
                    name: 'Relacionamento'
                },
                admin: false
            };

            currentUser = usuario;

            def.resolve(usuario);
        }, 2000);

        return def.promise;
    };

    service.logOut = function () {
        currentUser = null;
        //TODO: Limpar token

        RouteService.toLoginScreen();
    };

    service.rememberPassword = function (login) {
        var def = $q.defer();

        setTimeout(function () {
            def.success();
        }, 2000);

        return def.promise;
    };

    service.getCurrentUser = function () {
        if (currentUser) {
            return angular.copy(currentUser);
        } else {
            return null;
        }
    };

    return service;
}]);
