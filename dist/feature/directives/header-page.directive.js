(function() {
	"use strict";

	angular.module("featureDirectives")
		.directive("headerPage", headerPage);

	function headerPage(){
		return {
			restrict: "A",
			templateUrl: "html/header.html"
		};
	}

})();