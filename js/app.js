angular.module('app', ['ngSanitize', 'ng-showdown', 'ngResource']);
angular.module('app').controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.text = '#hello, markdown!';
    console.log('inited');
    $http.get('data/sample.md').then(function (res) {
        $scope.text = res.data;
    })
}])
