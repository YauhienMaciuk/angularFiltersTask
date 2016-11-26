(function() {
    "use strict";

    FormTask.$inject = ["taskFormSrv", "allTasks"];
    angular.module("feature")
        .controller("FormTask", FormTask);

    function FormTask(taskFormSrv, allTasks) {
        let $ctrl = this;
        $ctrl.allTasks = allTasks;
        Object.assign($ctrl, taskFormSrv);
    }

})();