if (typeof AV === 'undefined') {
    throw new Error('Service storage load failed because SDK of Leancloud was not met');
}

angular.module('appStorage', []).run(function () {
    AV.init({
        appId: 'cYYk9SnunWnRtHP1D9hOBy45-gzGzoHsz',
        appKey: 'LYspC2VPwYwls4ygbGgsDDKj'
    });
}).service('Storage', ['$rootScope', function ($rootScope) {
    this.fetchResume = function (id, successCallback, failureCallback) {
        AV.Object.createWithoutData('Resume', id).fetch().then(function (data) {
            $rootScope.$apply(function () {
                successCallback(data.get('content'));
            });
        }, function (err) {
            if (failureCallback) {
                $rootScope.$apply(function () {
                    failureCallback(err);
                });
            }
        });
    };
    this.saveResume = function (content, ref, successCallback, failureCallback) {
        var Resume = AV.Object.extend('Resume');
        var resume = new Resume();
        resume.set('content', content);
        resume.set('ref', ref);
        resume.save().then(function (resume) {
            $rootScope.$apply(function () {
                successCallback(resume.id);
            });
        }, function (err) {
            if (failureCallback) {
                $rootScope.$apply(function () {
                    failureCallback(err);
                });
            }
        });
    };
}]);

