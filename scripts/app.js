/**
 * Created by jdocampo on 21/11/2016.
 */
(function () {
    var app = angular.module('Start',['directives']);

    app.controller('ClickController', function ($scope) {
        $scope.Icont = 0;
            $scope.cont = function (x) {
                if(x != null){
                    $scope.Icont = x;
                }
            };

    });

})();