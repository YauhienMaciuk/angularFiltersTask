(function () {
	"use strict";

	angular.module("feature")
		.factory("timeSrv", timeSrv);

		function timeSrv() {
			return {
				showTime
			}

			function showTime($interval, $ctrl) {
			$interval(function() {
				$ctrl.time = new Date().toLocaleTimeString();
			}, 1000);
			}
		}
})();