(function() {
	"use strict";

	angular.module("featureDirectives")
		.directive("formCreateTask", formCreateTask);

	function formCreateTask(){
		return {
			restrict: "A",
			templateUrl: "html/formCreateTask.html"
		};
	}

})();