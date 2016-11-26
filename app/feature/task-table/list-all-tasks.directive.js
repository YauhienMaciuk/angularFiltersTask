(function() {
    "use strict";

    angular.module("featureTaskTable")
        .directive("allTasks", allTasks);

    function allTasks() {
        return {
            restrict: "E",
            templateUrl: "feature/task-table/all-tasks.html"
        };
    }

})();