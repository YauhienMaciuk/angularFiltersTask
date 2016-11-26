(function () {
	"use strict";

	angular.module("featureTime")
		.controller("Time", Time);

		function Time (timeSrv) {
			let $ctrl = this;
			$ctrl.time = timeSrv.showTime($ctrl);
		}
})();