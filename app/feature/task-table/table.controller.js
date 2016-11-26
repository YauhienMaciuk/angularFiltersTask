(function() {
    "use strict";

    angular.module("featureTaskTable")
        .controller("Table", Table);

    function Table(allTasks, taskTableSrv, startValuePaging, displayedTasks) {
        let $ctrl = this;
        $ctrl.allTasks = allTasks;
        $ctrl.valuePaging = startValuePaging;
        $ctrl.displayedTasks = displayedTasks;
        Object.assign($ctrl, taskTableSrv);
        $ctrl.doSearchTask = doSearchTask;

        function doSearchTask() {

            if (!angular.isUndefined($ctrl.storedItems)) {
                allTasks.items = $ctrl.storedItems;
            }

            if (!angular.isUndefined($ctrl.searchTask)) {
                let storedItems = allTasks.items;
                $ctrl.storedItems = storedItems;
                let pattern = $ctrl.searchTask.deadlineResponsible.toUpperCase();
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
            } else {
                return allTasks;
            }
        }
    }

})();