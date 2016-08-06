angular.module('dynas')
    .factory('RouteService', ['$location', function ($location) {
        var service = {};

        service.isSprintScreenActive = function() {
            return $location.path() === '/sprints';
        };

        service.toSprintScreen = function() {
            $location.path('/sprints');
        };

        service.isUserScreenActive = function() {
            return $location.path() === '/users';
        };

        service.toUserScreen = function() {
            $location.path('/users');
        };

        service.isTransactionScreenActive = function() {
            return $location.path() === '/transactions';
        };

        service.toTransactionScreen = function() {
            $location.path('/transactions');
        };

        service.toConfigurationScreen = function () {
            $location.path('/configuration');
        };

        service.isConfigurationScreenActive = function () {
            return $location.path() === '/configuration';
        }

        return service;
    }]);