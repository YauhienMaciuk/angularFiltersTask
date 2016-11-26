(function() {
    "use strict";

    angular.module("featureRank")
        .directive("rankPage", rankPage);

    function rankPage() {
        return {
            restrict: "E",
            templateUrl: "feature/rank/rank.html"
        };
    }
})();