(function() {
    "use strict";

    angular.module("feature")
        .directive("randomGeneratePage", randomGeneratePage);

    function randomGeneratePage() {
        return {
            restrict: "E",
            templateUrl: "html/random-generate.html"
        };
    }
})();