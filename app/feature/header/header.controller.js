(function() {
    "use strict";

    angular.module("featureHeader")
        .controller("Header", Header);

    function Header(userInfo) {
        let $ctrl = this;
        $ctrl.userInfo = userInfo;
    }

})();