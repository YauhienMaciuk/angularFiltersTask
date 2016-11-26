(function() {
    "use strict";

    angular.module("featureFormTask")
        .controller("FormTask", FormTask);

    function FormTask(taskFormSrv, allTasks) {
        let $ctrl = this;
        $ctrl.allTasks = allTasks;
        Object.assign($ctrl, taskFormSrv);
    }

})();