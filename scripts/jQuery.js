/**
 * Created by jdocampo on 22/11/2016.
 */
$(function () {
    var a = 0;
    $(document).keydown(function (event) {
        console.log("asdasdasd");
        if(event.key == "ArrowRight" && a <= 38) {
            console.log(a);
            console.log($('.a'));
            $($('.a')[a]).addClass('none');
            a++;
            $($('.a')[a]).removeClass('none');
        }
        if(event.key == "ArrowLeft" && a >= 1){
            $($('.a')[a]).addClass('none');
            a--;
            $($('.a')[a]).removeClass('none');
        }
    });
});