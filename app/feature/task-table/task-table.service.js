(function() {

    angular.module("featureTaskTable")
        .run(getTasksJson)
        .service("taskTableSrv", taskTableSrv);

    function taskTableSrv($localStorage, allTasks) {

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
            quantityTasks,
            lookAllTasks,
            wrightTasksToJson,
            getAllTasks,
            parseJson,
            searchTaskAfterParse
        };

        function lookAllTasks(ctrl) {
            wrightTasksToJson();
            getAllTasks(ctrl);
        }

        function wrightTasksToJson() {
            window.localStorage['items'] = angular.toJson(allTasks.items);
        }

        function getAllTasks(ctrl) {
            allTasks.items = parseJson();
            ctrl.allTasks = allTasks;
            ctrl.showAllTasks = true;
        }

        function parseJson() {
            var items = window.localStorage['items'];
            var arrayTasks = [];
            var allTasksFromJson = JSON.parse(items);
            angular.forEach(allTasksFromJson, function(item) {
                item.deadline = moment(item.deadline, 'MM-DD-YYYY').format('MM-DD-YYYY');
                arrayTasks.push(item);
            });
            return arrayTasks;
        }

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

        function previousPage(valuePaging, ctrl) {
            valuePaging = valuePaging - ctrl.displayedTasks;
            ctrl.valuePaging = valuePaging;
        }

        function nextPage(valuePaging, ctrl) {
            valuePaging = valuePaging + ctrl.displayedTasks;
            ctrl.valuePaging = valuePaging;
        }


        function quantityTasks() {
            let quantity = allTasks.items.length;
            return quantity;
        }

        function deleteTask(item, ctrl) {
            let itemsAllTasks = allTasks.items;
            let indexItemsAllTasks = itemsAllTasks.indexOf(item);
            let itemsFromLocalStorage = parseJson();

            let index = searchTaskAfterParse(itemsFromLocalStorage, item);
            itemsFromLocalStorage.splice(index, 1);
            itemsAllTasks.splice(indexItemsAllTasks, 1);
            window.localStorage['items'] = angular.toJson(itemsFromLocalStorage);
            if(allTasks.items.length === 0) {
                allTasks.items = parseJson();
                ctrl.searchTask.deadlineResponsible = "";
            }
        }

        function searchTaskAfterParse(itemsFromLocalStorage, item) {
            let index;
            angular.forEach(itemsFromLocalStorage, function(parsedItem) {
                if (parsedItem.deadline === item.deadline 
                    && parsedItem.deadlineResponsible === item.deadlineResponsible 
                    && parsedItem.estResponsible === item.estResponsible 
                    && parsedItem.estHours === item.estHours) {
                    index = itemsFromLocalStorage.indexOf(parsedItem);
                }
            })
            return index;
        }

        function deleteAllClosedTasks(ctrl) {
            let items = allTasks.items;
            angular.forEach(items, function(item) {
                if (item.status === false) {
                    deleteTask(item, ctrl);
                }
            });
        }

        function performTask(item) {
            let itemsAllTasks = allTasks.items;
            var indexItemsAllTasks = itemsAllTasks.indexOf(item);
            let itemsFromLocalStorage = parseJson();
            let index = searchTaskAfterParse(itemsFromLocalStorage, item);
            item.status = false;
            itemsAllTasks.splice(indexItemsAllTasks, 1, item);
            itemsFromLocalStorage.splice(index, 1, item);

            window.localStorage['items'] = angular.toJson(itemsFromLocalStorage);
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