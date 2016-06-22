$(function () {

//    DESLIZA O MENU
    $('.main_nav a').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        return false;
    });
    $('.main_header_nav a').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('.mobile_action').removeClass('active');
        $('.main_header_nav').animate({'left': '-100%'}, 300);
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        return false;
    });
    $('.main_button a').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        return false;
    });
    $('.main_footer a').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        return false;
    });
    //    SUSPENDE MENU
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.main_header').outerHeight()) {
            $('body').css('padding-top', $('.main_header').outerHeight());
            $('.main_header').addClass('main_header_fixed');
            $('.j_back').fadeIn(500);
        } else {
            $('body').css('padding-top', '0');
            $('.main_header').removeClass('main_header_fixed');
            $('.j_back').fadeOut(500);
        }
    });
//    BACK TOPO
    $('.j_back').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    //CONTROLE DO MENU MOBILE
    $('.mobile_action').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main_header_nav').animate({'left': '0px'}, 300);
        } else {
            $(this).removeClass('active');
            $('.main_header_nav').animate({'left': '-100%'}, 300);
        }
    });
    //accordeon
//    $( ".accordion" ).accordion({
//      heightStyle: "content"
//    });

    $(".accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false,
        activate: function (event, ui) {
            if (!$.isEmptyObject(ui.newHeader.offset())) {
                $('html:not(:animated), body:not(:animated)').animate({scrollTop: ui.newHeader.offset().top - $('.main_header').outerHeight()}, 'slow');
            }
        }

    });

});