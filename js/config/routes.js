angular.module('dynas')

    .constant('sprintRoute', "/sprints")
    .constant('userRoute', "/users")
    .constant('transactionRoute', "/transactions")
    .constant('configurationRoute', "/configuration")
    .constant('loginRoute', "/login")

    .config( function ($routeProvider) {
        $routeProvider
            .when('/plugin', {
                templateUrl: 'partials/plugin.html',
                requireAuth: true
            })
            .when('/sprints', {
                templateUrl: 'partials/sprints.html',
                controller: 'SprintController',
                requireAuth: true
            })
            .when('/transactions', {
                templateUrl: 'partials/transactions.html',
                controller: 'TransactionController',
                requireAuth: true
            })
            .when('/configuration', {
                templateUrl: 'partials/configuration.html',
                controller: 'ConfigurationController',
                requireAuth: true
            })
            .when('/users', {
                templateUrl: 'partials/users.html',
                controller: 'UserController',
                requireAuth: true
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
