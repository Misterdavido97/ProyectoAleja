(function () {
    var app = angular.module('directives',[]);

    app.directive("pageP1",function () {
        return{
            restrict: 'E',
            templateUrl: "views/pageP1.html"
        };
    });
    app.directive("pageP2",function () {
        return{
            restrict: 'E',
            templateUrl: "views/pageP2.html"
        };
    });
    app.directive("pageP3",function () {
        return{
            restrict: 'E',
            templateUrl: "views/pageP3.html"
        };
    });
    app.directive("pageP4",function () {
        return{
            restrict: 'E',
            templateUrl: "views/pageP4.html"
        };
    });

})();