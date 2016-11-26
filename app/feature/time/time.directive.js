(function() {
    "use strict";

    angular.module("featureTime")
        .directive("timePage", timePage);

    function timePage() {
        return {
            restrict: "A",
            templateUrl: "feature/time/time.html"
        };
    }
})();