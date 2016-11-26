(function() {
    "use strict";

    angular.module("featureFormTask")
        .directive("formCreateTask", formCreateTask);

    function formCreateTask() {
        return {
            restrict: "A",
            templateUrl: "feature/form-task/form-create-task.html"
        };
    }

})();