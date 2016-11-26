(function() {
    "use strict";
    angular.module("app", [
        "common",
        "feature"
    ])

    	.config(appConfig)
        .decorator("taskFormSrv", taskCreateLog)
        .decorator("taskTableSrv", taskPerformLog)
        .decorator("taskTableSrv", taskDeleteLog)
        .decorator("taskTableSrv", dateleAllClosedTasksLog)
        .decorator("taskTableSrv", myLog);

    function appConfig(rankSrvProvider, longStarMsg) {
        rankSrvProvider.configRank(longStarMsg);
    }

    angular.element(document).ready(function() {
        angular.bootstrap(document, ["app"]);
    });

})();