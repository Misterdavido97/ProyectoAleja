/**
 * Created by jdocampo on 22/11/2016.
 */
$(function () {
    var a = 0;
    $(document).keydown(function (event) {
        if(event.key == "ArrowRight" && a <= 3) {
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
    $('.botton').on('click',function () {
        $('#pops').addClass('none');
    })
});
function pop(event) {
    console.log(event);
    $('#pops').removeClass('none');
    $('#popup').prop('src',event);
}
