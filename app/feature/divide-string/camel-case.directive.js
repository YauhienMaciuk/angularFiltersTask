(function() {
    "use strict";

    angular.module("featureDivideString")
        .directive("camelCaseTask", cameCaseTask);

    function cameCaseTask() {
        return {
            restrict: "E",
            templateUrl: "feature/divide-string/camel-case.html"
        };
    }

})();