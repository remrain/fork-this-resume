if (typeof AV === 'undefined') {
    throw new Error('Service storage load failed because SDK of Leancloud was not met');
}

angular.module('appStorage', []).run(function () {
    AV.init({
        appId: 'cYYk9SnunWnRtHP1D9hOBy45-gzGzoHsz',
        appKey: 'LYspC2VPwYwls4ygbGgsDDKj'
    });
}).service('Storage', ['$timeout', '$http', function ($timeout, $http) {
    var sample = window.sample || {};
    var cache = {};
    this.fetchResume = function (id, successCallback, failureCallback) {
        if (cache[id]) {
            successCallback(cache[id]);
        } else if (sample[id]) {
            $http.get(sample[id]).then(function (res) {
                cache[id] = res.data;
                successCallback(res.data);
            })
        } else {
            AV.Object.createWithoutData('Resume', id).fetch().then(function (data) {
                $timeout(function () {
                    var content = data.get('content');
                    cache[id] = content;
                    successCallback(content);
                });
            }, function (err) {
                if (failureCallback) {
                    $timeout(function () {
                        failureCallback(err);
                    });
                }
            });
        }
    };
    this.saveResume = function (content, ref, successCallback, failureCallback) {
        var Resume = AV.Object.extend('Resume');
        var resume = new Resume();
        resume.set('content', content);
        resume.set('ref', ref);
        resume.save().then(function (resume) {
            cache[resume.id] = content;
            $timeout(function () {
                successCallback(resume.id);
            });
        }, function (err) {
            if (failureCallback) {
                $timeout(function () {
                    failureCallback(err);
                });
            }
        });
    };
}]);

