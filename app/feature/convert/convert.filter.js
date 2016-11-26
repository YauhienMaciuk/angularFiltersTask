(function() {
    "use strict";
    angular.module("featureConvert")
        .filter("convert", convert);

    function convert() {
        return function(input, enteredNumber, value) {
            if (angular.isNumber(enteredNumber)) {
                let convertedValue;
                switch (true) {
                    case (value === "GBt"):
                        convertedValue = enteredNumber / 1024;
                        break;
                    case (value === "KBt"):
                        convertedValue = enteredNumber * 1024;
                        break;
                }
                return convertedValue;
            }
        }
    }

})();