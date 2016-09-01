app.controller('PluginController', ['$scope', 'RouteService', function ($scope, RouteService) {

        $scope.currentSprint = {};
        $scope.bankValue = 0;
        $scope.receivedValue = 0;

        $scope.toSendScreen = function () {
            RouteService.toSendScreen();
        };

        $scope.toQuestionScreen = function () {
            RouteService.toQuestionScreen();
        };

}]);
