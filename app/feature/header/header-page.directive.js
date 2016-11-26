(function() {
    "use strict";

    angular.module("featureHeader")
        .directive("headerPage", headerPage);

    function headerPage() {
        return {
            restrict: "A",
            templateUrl: "feature/header/header.html"
        };
    }

})();