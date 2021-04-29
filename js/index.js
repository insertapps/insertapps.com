//  HEADER SCROLL EFFECT
$(function() {
    var header = $("#headerian");
    $(window).scroll(function() {    
        const scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            header.removeClass('py2').addClass("py1");
        } else {
            header.removeClass("py1").addClass('py2');
        }
    });
});


