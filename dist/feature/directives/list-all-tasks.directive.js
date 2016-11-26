(function() {
	"use strict";

	angular.module("featureDirectives")
		.directive("allTasks", allTasks);

		function allTasks() {
		return {
			restrict: "E",
			templateUrl: "html/allTasks.html"
		};
		}

})();