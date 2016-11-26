(function() {
    "use strict";

    angular.module("feature")
        .directive("timePage", timePage);

    function timePage() {
        return {
            restrict: "A",
            templateUrl: "html/time.html"
        };
    }
})();