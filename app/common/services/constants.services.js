(function() {
    angular.module("commonServices")
        .constant("appName", "todoHome")
        .constant("defaultStarMsg", "Stars: ")
        .constant("fiveStar", "* * * * *")
        .constant("fourStar", "* * * *")
        .constant("threeStar", "* * *")
        .constant("twoStar", "* *")
        .constant("oneStar", "*")
        .constant("longStarMsg", "You have typed count according to the stars: ")
        .constant("symbols", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
        .constant("undefined", "undefined");
})();