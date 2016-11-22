/**
 * Created by jdocampo on 21/11/2016.
 */
(function () {
    var app = angular.module('Start',['directives']);

    app.controller('ClickController', function () {

        $(document).keydown(function (event) {
            if(event.key == "ArrowRight"){
                alert("Derechar");
            }else{
                if(event.key == "ArrowLeft"){
                    alert("Izquierda");
                }
            }
        });

    });

})();