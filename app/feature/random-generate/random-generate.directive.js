(function() {
    "use strict";

    angular.module("featureRandomGenerate")
        .directive("randomGeneratePage", randomGeneratePage);

    function randomGeneratePage() {
        return {
            restrict: "E",
            templateUrl: "feature/random-generate/random-generate.html"
        };
    }
})();