(function () {
	"use strict";

		Time.$inject = ["timeSrv", "$interval"];
	angular.module("feature")
		.controller("Time", Time);

		function Time (timeSrv, $interval) {
			let $ctrl = this;
			$ctrl.time = timeSrv.showTime($interval, $ctrl);
		}
})();