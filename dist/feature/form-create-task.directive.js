(function() {
    "use strict";

    angular.module("feature")
        .directive("formCreateTask", formCreateTask);

    function formCreateTask() {
        return {
            restrict: "A",
            templateUrl: "html/form-create-task.html"
        };
    }

})();