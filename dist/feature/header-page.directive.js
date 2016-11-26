(function() {
    "use strict";

    angular.module("feature")
        .directive("headerPage", headerPage);

    function headerPage() {
        return {
            restrict: "A",
            templateUrl: "html/header.html"
        };
    }

})();