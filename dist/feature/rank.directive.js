(function() {
    "use strict";

    angular.module("feature")
        .directive("rankPage", rankPage);

    function rankPage() {
        return {
            restrict: "E",
            templateUrl: "html/rank.html"
        };
    }
})();