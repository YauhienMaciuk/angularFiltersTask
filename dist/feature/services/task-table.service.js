(function(){

	getAllTasks.$inject = ["$http", "allTasks"];
	angular.module("featureServices")
		.run(getAllTasks)
		.service("taskTableSrv", taskTableSrv);

	function taskTableSrv() {
		
		return {
			statusView, cutOffDate, deleteTask, 
			deleteAllClosedTasks, performTask, closedTaskCount,
			verifyNewItem, editTask
		};

		function editTask(items, item, editedItem) {
			editedItem = item;
			deleteTask(items, item);
		}

		function verifyNewItem(item) {
			return (!item || !item.deadline || !item.deadlineResponsible 
				|| !item.estHours || !item.estResponsible);
		}

		function statusView(status){
			var statusOpen = "Open";
			var statusClose = "Close";
			if(status){
				return statusOpen;
			}
			else{
				return statusClose;
			}
		}

		function cutOffDate(deadline){
			if(deadline.length < 11){
				return deadline;
			}
			else {
				return moment(deadline, 'MM-DD-YYYY').format('MM-DD-YYYY');
			}
		}

		function deleteTask(items, item){
			var index = items.indexOf(item);
			items.splice(index, 1);
		}

		function deleteAllClosedTasks(items){
			angular.forEach(items, function(item){
				if(item.status === false){
					deleteTask(items, item);
				}
			});
		}

		function performTask(item){
			item.status = false;
		}

		function closedTaskCount(items){
			var closedTask = 0;
			angular.forEach(items, function(item){
				if(item.status === false){
					closedTask++;
				}
			});
			return closedTask;
		}
	}

	function getAllTasks($http, allTasks) {
		$http
			.get("feature/listHomeTask.json")
			.then(response => allTasks.items = response.data);		
	}
})();