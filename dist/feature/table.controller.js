(function() {
    "use strict";

    Table.$inject = ["allTasks", "taskTableSrv", "$localStorage"];
    angular.module("feature")
        .controller("Table", Table);

    function Table(allTasks, taskTableSrv, $localStorage) {
        let $ctrl = this;
        $ctrl.allTasks = allTasks;
        Object.assign($ctrl, taskTableSrv);
        var items = window.localStorage['items'];
        $ctrl.allTasks.items = getAllTasks(items);

        function getAllTasks(items) {
            var arrayTasks = [];
            var allTasks = JSON.parse(items);
            angular.forEach(allTasks, function(item) {
                item.deadline = moment(item.deadline, 'MM-DD-YYYY').format('MM-DD-YYYY');
                arrayTasks.push(item);
            });
            return arrayTasks;
        }
    }

})();