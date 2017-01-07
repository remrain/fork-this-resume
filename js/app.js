angular.module('app', ['ngSanitize', 'ng-showdown', 'ngResource']);
angular.module('app').controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.text = '';
    $scope.editing = true;
    $scope.doEdit = function () {
        $scope.editing = true;
    };
    $scope.doPreview = function () {
        $scope.editing = false;
    };
    $http.get('data/sample.md').then(function (res) {
        $scope.text = res.data;
    })
}])
