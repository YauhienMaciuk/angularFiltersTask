(function() {
    "use strict";

    angular.module("feature")
        .service("taskFormSrv", taskFormSrv);

    function taskFormSrv() {
        return {
            createTask
        }


        function createTask(items, newItem, $localStorage) {
            if (newItem && newItem.deadline && newItem.deadlineResponsible && newItem.estHours && newItem.estResponsible) {
                items.push({
                    "deadline": moment(newItem.deadline, 'MM-DD-YYYY').format('MM-DD-YYYY'),
                    "deadlineResponsible": newItem.deadlineResponsible,
                    "estHours": newItem.estHours,
                    "estResponsible": newItem.estResponsible,
                    "status": true
                });
                window.localStorage['items'] = angular.toJson(items);

                newItem.deadline = "";
                newItem.deadlineResponsible = "";
                newItem.estHours = "";
                newItem.estResponsible = "";
            }
        }

    }


})();