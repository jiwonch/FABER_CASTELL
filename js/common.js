// toggle click event 발생 시, main menu open
$(document).ready(function(){
    $('.tglMn,img.Vector').click(function(){
        $('.fullNav').toggle();
        if($('.fullNav').css("display"))

        if ($("#full_nav_wrap").css("display") === "none") {
            $("body").css("overflow-y", "auto");
        } else {
            $("body").css("overflow-y", "hidden");
        }
    });

    $('#main-logo').click(function(){
        location.href='main.html';
    });
});