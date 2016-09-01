angular.module('dynas')

    .constant('mainRoute', "/plugin")
    .constant('sendRoute', "/plugin/send")
    .constant('questionRoute', "/plugin/question")
    .constant('loginRoute', "/login")

    .config( function ($routeProvider) {
        $routeProvider
            .when('/plugin', {
                templateUrl: 'partials/plugin.html',
                requireAuth: true,
                controller: 'PluginController',
            })
            .when('/plugin/send', {
                templateUrl: 'partials/plugin/send.html',
                controller: 'SendController',
                requireAuth: true
            })
            .when('/plugin/question', {
                templateUrl: 'partials/plugin/question.html',
                controller: 'QuestionController',
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
