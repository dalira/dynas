angular.module('dynas')

    .constant('sprintRoute', "/sprints")
    .constant('userRoute', "/users")
    .constant('transactionRoute', "/transactions")
    .constant('configurationRoute', "/configuration")
    .constant('loginRoute', "/login")

    .config( function ($routeProvider) {
        $routeProvider
            .when('/plugin', {
                templateUrl: 'partials/plugin.html'
            })
            .when('/sprints', {
                templateUrl: 'partials/sprints.html',
                controller: 'SprintController'
            })
            .when('/transactions', {
                templateUrl: 'partials/transactions.html',
                controller: 'TransactionController'
            })
            .when('/configuration', {
                templateUrl: 'partials/configuration.html',
                controller: 'ConfigurationController'
            })
            .when('/users', {
                templateUrl: 'partials/users.html',
                controller: 'UserController'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
