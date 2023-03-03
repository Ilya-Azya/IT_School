$(document).ready(function () {
    $('.menu-burger').click(function () {
        $('.menu-burger').toggleClass('open-menu');
        $('.cap_link_list').toggleClass('open-menu');
        $('body').toggleClass('fixed');
        if ((!$('#cap').hasClass('bg-d')) || ($(window).scrollTop()<=20)){
            $('#cap').toggleClass('bg-d');
            $('.menu-burger').toggleClass('bg-d').toggleClass('bg-black')
            $('.logo_title').toggleClass('color-white')
        }
    });
});

