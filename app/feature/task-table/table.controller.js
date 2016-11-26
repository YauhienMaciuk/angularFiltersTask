(function() {
    "use strict";

    angular.module("featureTaskTable")
        .controller("Table", Table);

    function Table(allTasks, taskTableSrv, startValuePaging, displayedTasks, showAllTasks) {
        let $ctrl = this;
        $ctrl.allTasks = allTasks;
        $ctrl.valuePaging = startValuePaging;
        $ctrl.displayedTasks = displayedTasks;
        $ctrl.showAllTasks = showAllTasks;
        Object.assign($ctrl, taskTableSrv);
        $ctrl.doSearchTask = doSearchTask;

        function doSearchTask() {

            if (!angular.isUndefined($ctrl.storedPattern)) {
                let storedPattern = $ctrl.storedPattern;
                let pattern = $ctrl.searchTask.deadlineResponsible.toUpperCase();
                if (storedPattern === pattern) {
                    return allTasks;
                }
            }

            if (!angular.isUndefined($ctrl.searchTask)) {
                taskTableSrv.getAllTasks(allTasks);
                let pattern = $ctrl.searchTask.deadlineResponsible.toUpperCase();

                let storedPattern = pattern;
                $ctrl.storedPattern = storedPattern;

                let resultSearch = [];
                angular.forEach(allTasks.items, function(item) {
                    let deadlineResponsible = item.deadlineResponsible.toUpperCase();
                    let estResponsible = item.estResponsible.toUpperCase();
                    if (deadlineResponsible.indexOf(pattern) !== -1 || estResponsible.indexOf(pattern) !== -1) {
                        resultSearch.push(item);
                    }
                })

                allTasks.items = resultSearch;
                return allTasks;
            }
        }
    }

})();