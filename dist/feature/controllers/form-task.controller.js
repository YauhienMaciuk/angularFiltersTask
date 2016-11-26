(function() {
	"use strict";

		FormTask.$inject = ["taskFormSrv", "allTasks"];
	angular.module("featureControllers")
		.controller("FormTask", FormTask);

		function FormTask(taskFormSrv, allTasks) {
			let $ctrl = this;
			$ctrl.allTasks = allTasks;
			Object.assign($ctrl, taskFormSrv);
		}

})();