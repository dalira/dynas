angular.module('dynas')
    .controller('PluginController', ['$scope', function ($scope) {

        $scope.questionTemplate = "partials/plugin/question-info.html";
        $scope.sendTemplate = "partials/plugin/send-info.html";

}]);
