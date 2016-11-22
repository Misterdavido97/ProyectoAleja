(function () {
    var app = angular.module('directives',[]);

    app.directive("pageOne",function () {
        return{
            restrict: 'E',
            templateUrl: "views/pageOne.html"
        };
    });
    app.directive("pageTwo",function () {
        return{
            restrict: 'E',
            templateUrl: "views/pageTwo.html"
        };
    });

})();