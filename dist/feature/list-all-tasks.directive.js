(function() {
    "use strict";

    angular.module("feature")
        .directive("allTasks", allTasks);

    function allTasks() {
        return {
            restrict: "E",
            templateUrl: "html/all-tasks.html"
        };
    }

})();