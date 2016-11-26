(function() {
    "use strict";

    angular.module("featureRank")
        .controller("Rank", Rank);

    function Rank(rankSrv, oneStar, twoStar, threeStar, fourStar, fiveStar, undefined) {
        let $ctrl = this;
        $ctrl.oneStar = oneStar;
        $ctrl.twoStar = twoStar;
        $ctrl.threeStar = threeStar;
        $ctrl.fourStar = fourStar;
        $ctrl.fiveStar = fiveStar;
        $ctrl.undefined = undefined;
        Object.assign($ctrl, rankSrv);
    }
})();