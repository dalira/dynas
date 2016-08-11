angular.module('dynas')
    .config( function ($routeProvider) {
        $routeProvider
            .when('/plugin', {
                templateUrl: 'partials/popup.html',
                controller: 'PluginController'
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
            });
    });
