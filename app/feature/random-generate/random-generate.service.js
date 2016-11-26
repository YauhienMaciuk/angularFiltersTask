(function() {
    angular.module("featureRandomGenerate")
        .service("randomSrv", randomSrv);

    function randomSrv() {
        return {
            randomText
        }

        function randomText(symbols) {
            var text = "";
            var lengthText = Math.floor(Math.random() * 150);

            for (var i = 0; i < lengthText; i++)
                text += symbols.charAt(Math.floor(Math.random() * symbols.length));

            return text;
        }
    }

})();