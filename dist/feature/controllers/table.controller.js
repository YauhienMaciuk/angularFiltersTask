(function() {
	"use strict";

		Table.$inject = ["allTasks", "taskTableSrv"];
	angular.module("featureControllers")
		.controller("Table", Table);

		function Table(allTasks, taskTableSrv) {
			let $ctrl = this;
			$ctrl.allTasks = allTasks;
			Object.assign($ctrl, taskTableSrv);
		}

})();