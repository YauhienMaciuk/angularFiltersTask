(function() {
    "use strict";
    angular.module("featureDivideString")
        .filter("divideString", divideString);

    function divideString() {
        return function(camelCaseString) {
            if (!angular.isUndefined(camelCaseString)) {
                let formattedString = camelCaseString.replace(/([A-ZА-Я])/g, ' $1').trim()
                return formattedString;
            }
        }
    }

})();