(function() {
	"use strict";

	angular.module("featureServices")
		.service("taskFormSrv", taskFormSrv);

		function taskFormSrv() {
			return {
				 createTask
			}

		function createTask(items, newItem){
			if(newItem && newItem.deadline && newItem.deadlineResponsible 
				&& newItem.estHours && newItem.estResponsible){
				items.push({
					"deadline": newItem.deadline,
					"deadlineResponsible": newItem.deadlineResponsible,
					"estHours": newItem.estHours,
					"estResponsible": newItem.estResponsible,
					"status": true
				});

				newItem.deadline = "";
				newItem.deadlineResponsible = "";
				newItem.estHours = "";
				newItem.estResponsible = "";
			}
		}

		}


})();