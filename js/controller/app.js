angular.module('app', ['ngSanitize', 'ng-showdown', 'ngResource', 'appStorage']);
angular.module('app').controller('AppCtrl', ['$scope', '$http', 'Storage', function ($scope, $http, Storage) {
    $scope.text = '';
    $scope.editing = false;
    $scope.doEdit = function () {
        $scope.editing = true;
    };
    $scope.doPreview = function () {
        $scope.editing = false;
        Storage.saveResume($scope.text, '', function (id) {
            console.log('new id:', id);
        });
    };
    $http.get('data/sample.md').then(function (res) {
        $scope.text = res.data;
    })
}])
