(function() {
	"use strict";

	angular.module("commonServices")
		.value("displayedTasks", 4)
		.value("allTasks", {})
		.value("startValuePaging", 0)
		.value("showAllTasks", false)
		.value("userInfo", {
            name: "Yauheni",
            photo: "images/Yauheni.png"
        });
})();