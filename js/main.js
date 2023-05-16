// toggle click event 발생 시, main menu open
$(document).ready(function(){
    $('.tglMn').click(function(){
        $('.fullNav').toggle();
        $('#tgl_mn').css('z-index', '9999');
    });

    $(document).click(function(event){
        var target = $(event.target);
        if (!target.closest('.tglMn').length) {
            $('.fullNav').hide();
            $('#tgl_mn').css('z-index', '1');
        }
    });
});