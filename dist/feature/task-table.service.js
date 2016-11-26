(function() {

    angular.module("feature")
        .service("taskTableSrv", taskTableSrv);

    function taskTableSrv() {

        return {
            statusView,
            deleteTask,
            deleteAllClosedTasks,
            performTask,
            closedTaskCount,
            verifyNewItem,
            editTask
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

        function deleteTask(items, item) {
            var index = items.indexOf(item);
            items.splice(index, 1);
            window.localStorage['items'] = angular.toJson(items);
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
            window.localStorage['items'] = angular.toJson(items);
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
})();