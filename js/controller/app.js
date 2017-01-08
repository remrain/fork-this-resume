angular.module('app').controller('AppCtrl', ['$scope', '$stateParams', '$state', 'Storage', function ($scope, $stateParams, $state, Storage) {
    console.log('AppCtrl enter');
    console.log($stateParams.id);

    $scope.text = '';
    $scope.editing = ($stateParams.action == 'fork') ? true : false;
    $scope.preview = false;

    if ($stateParams.id) {
        $scope.id = $stateParams.id;
        Storage.fetchResume($stateParams.id, function (text) {
            $scope.text = text;
        });
    }

    $scope.doEdit = function () {
        $scope.editing = true;
    };

    $scope.doPreview = function () {
        $scope.editing = false;
        $scope.preview = true;
    };

    $scope.doSave = function () {
        Storage.saveResume($scope.text, $scope.id, function (id) {
            $state.go('show', {id: id});
        }, function (err) {
            alert('Save failed: ' + err.message);
        });
    }
}])
