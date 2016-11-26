(function() {
    "use strict";

    angular.module("featureConvert")
        .directive("convert", convert);

    function convert() {
        return {
            restrict: "E",
            templateUrl: "feature/convert/convert.html"
        };
    }

})();