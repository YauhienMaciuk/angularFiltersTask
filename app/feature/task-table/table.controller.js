(function() {
    "use strict";

    angular.module("featureTaskTable")
        .controller("Table", Table);

    function Table(allTasks, taskTableSrv, startValuePaging, displayedTasks, showAllTasks) {
        let $ctrl = this;
        $ctrl.valuePaging = startValuePaging;
        $ctrl.displayedTasks = displayedTasks;
        $ctrl.showAllTasks = showAllTasks;
        Object.assign($ctrl, taskTableSrv);
        $ctrl.allTasks = allTasks;
        $ctrl.doSearchTask = doSearchTask;

        function doSearchTask() {

            if (!angular.isUndefined($ctrl.workedPattern)) {
                let workedPattern = $ctrl.workedPattern;
                let pattern = $ctrl.searchTask.deadlineResponsible.toUpperCase();
                if (workedPattern === pattern) {
                    return allTasks;
                }
            }

            if (!angular.isUndefined($ctrl.notWorkedPattern)) {
                let notWorkedPattern = $ctrl.notWorkedPattern;
                let pattern = $ctrl.searchTask.deadlineResponsible.toUpperCase();
                if (notWorkedPattern === pattern) {
                    return allTasks;
                }
            }

            if (!angular.isUndefined($ctrl.searchTask)) {
                taskTableSrv.getAllTasks($ctrl);
                let pattern = $ctrl.searchTask.deadlineResponsible.toUpperCase();

                let resultSearch = searchByPattern(pattern);

                if (resultSearch.length === 0) {
                    allTasks.items = searchByPattern($ctrl.workedPattern);
                    alert("Not Found. Please, type valid data");
                    $ctrl.notWorkedPattern = pattern;
                    return allTasks;
                } else {
                    $ctrl.workedPattern = pattern;
                    allTasks.items = resultSearch;
                    return allTasks;
                }
            }
            return allTasks;
        }

        function searchByPattern(pattern) {
            let resultSearch = [];
            angular.forEach(allTasks.items, function(item) {
                let deadlineResponsible = item.deadlineResponsible.toUpperCase();
                let estResponsible = item.estResponsible.toUpperCase();
                if (deadlineResponsible.indexOf(pattern) !== -1 || estResponsible.indexOf(pattern) !== -1) {
                    resultSearch.push(item);
                }
            })
            return resultSearch;
        }


    }

})();