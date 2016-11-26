(function () {
	"use strict";

	angular.module("featureTime")
		.factory("timeSrv", timeSrv);

		function timeSrv($interval) {
			return {
				showTime
			}

			function showTime($ctrl) {
			$interval(function() {
				$ctrl.time = new Date().toLocaleTimeString();
			}, 1000);
			}
		}
})();