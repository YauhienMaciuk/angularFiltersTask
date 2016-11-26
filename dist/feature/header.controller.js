(function() {
    "use strict";

    Header.$inject = ["userInfo"];
    angular.module("feature")
        .controller("Header", Header);

    function Header(userInfo) {
        let $ctrl = this;
        $ctrl.userInfo = userInfo;
    }

})();