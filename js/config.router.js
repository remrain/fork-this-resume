(function () {
    var app = angular.module('app', ['ngSanitize', 'ng-showdown', 'ngResource', 'oc.lazyLoad', 'ui.router', 'appStorage']);

    app.controller('SiteCtrl', function () {
        // init
    });

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,   $urlRouterProvider) {
        $urlRouterProvider.otherwise(function($injector, $location) {
            var $state = $injector.get("$state");
            // $state.go('show', {id: '5871da001b69e6005cd8302b'});
            $state.go('show', {id: 'readme'});
        });

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'tpl/main.html',
                controller: 'AppCtrl',
                resolve: load(['js/controller/app.js'])
            })
            .state('show', {
                url: '/show/:id',
                templateUrl: 'tpl/main.html',
                controller: 'AppCtrl',
                params: {action: 'show'},
                resolve: load(['js/controller/app.js'])
            })
            .state('fork', {
                url: '/fork/:id',
                templateUrl: 'tpl/main.html',
                controller: 'AppCtrl',
                params: {action: 'fork'},
                resolve: load(['js/controller/app.js'])
            })

        function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q', function($ocLazyLoad, $q) {
                        var deferred = $q.defer();
                        var promise  = deferred.promise;
                        srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                        angular.forEach(srcs, function (src) {
                            promise = promise.then(function() {
                                return $ocLazyLoad.load(src);
                            });
                        });
                        deferred.resolve();
                        return callback ? promise.then(function() { return callback(); }) : promise;
                }]
            }
        }
    }]);

})();
