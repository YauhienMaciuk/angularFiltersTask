(function() {

    angular.module("featureTaskTable")
        .run(getTasksJson)
        .service("taskTableSrv", taskTableSrv);

    function taskTableSrv() {

        return {
            statusView,
            deleteTask,
            deleteAllClosedTasks,
            performTask,
            closedTaskCount,
            verifyNewItem,
            editTask,
            previousPage,
            nextPage,
            quantityTasks
        };

        function editTask(items, item, editedItem) {
            editedItem = item;
            deleteTask(items, item);
        }

        function verifyNewItem(item) {
            return (!item || !item.deadline || !item.deadlineResponsible || !item.estHours || !item.estResponsible);
        }

        function statusView(status) {
            var statusOpen = "Open";
            var statusClose = "Close";
            if (status) {
                return statusOpen;
            } else {
                return statusClose;
            }
        }

        function previousPage(valuePaging, $ctrl) {
            valuePaging = valuePaging - 4;
            $ctrl.valuePaging = valuePaging;
        }

        function nextPage(valuePaging, $ctrl) {
            valuePaging = valuePaging + 4;
            $ctrl.valuePaging = valuePaging;
        }


        function quantityTasks(items) {
            let quantity = items.length;
            return quantity;
        }

        function deleteTask(items, item) {
            var index = items.indexOf(item);
            items.splice(index, 1);
        }

        function deleteAllClosedTasks(items) {
            angular.forEach(items, function(item) {
                if (item.status === false) {
                    deleteTask(items, item);
                }
            });
        }

        function performTask(items, item) {
            var index = items.indexOf(item);
            item.status = false;
            items.splice(index, 1, item);
        }

        function closedTaskCount(items) {
            var closedTask = 0;
            angular.forEach(items, function(item) {
                if (item.status === false) {
                    closedTask++;
                }
            });
            return closedTask;
        }

    }

    function getTasksJson($http, allTasks) {
        $http
            .get("json/all-tasks.json")
            .then(response => allTasks.items = response.data);
    }
})();