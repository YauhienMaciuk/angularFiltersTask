(function () {
	"use strict";

	angular.module("featureTime")
		.controller("Time", Time);

		function Time (timeSrv, $interval) {
			let $ctrl = this;
			$ctrl.time = timeSrv.showTime($interval, $ctrl);
		}
})();