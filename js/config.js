(function () {
    var resource = {
        default: [
            "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js",
            "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular-sanitize.min.js",
            "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular-resource.min.js",
            "//cdnjs.cloudflare.com/ajax/libs/oclazyload/1.0.9/ocLazyLoad.min.js",
            "//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.min.js",
            "//cdnjs.cloudflare.com/ajax/libs/showdown/1.5.5/showdown.min.js",
            "//cdnjs.cloudflare.com/ajax/libs/ng-showdown/1.1.0/ng-showdown.min.js",
            "//cdn1.lncld.net/static/js/av-min-1.5.3.js",
            "js/service/storage.js",
            "js/config.router.js"
        ],
        cn: [
            "//cdn.bootcss.com/angular.js/1.6.1/angular.min.js",
            "//cdn.bootcss.com/angular-sanitize/1.6.1/angular-sanitize.min.js",
            "//cdn.bootcss.com/angular-resource/1.6.1/angular-resource.min.js",
            "//cdn.bootcss.com/angular-ui-router/0.3.2/angular-ui-router.min.js",
            "//cdn.bootcss.com/oclazyload/1.0.9/ocLazyLoad.min.js",
            "//cdn.bootcss.com/showdown/1.5.5/showdown.min.js",
            "//cdn.bootcss.com/ng-showdown/1.1.0/ng-showdown.min.js",
            "//cdn1.lncld.net/static/js/av-min-1.5.3.js",
            "js/service/storage.js",
            "js/config.router.js"
        ]
    };
    var conf = "cn";
    for (var i = 0; i < resource[conf].length; i++) {
        var js = document.createElement("script");
        js.src = resource[conf][i];
        js.async = false;
        document.body.appendChild(js);
    }
})();
