$(document).ready(function () {
    // Scroll to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Toggle skill descriptions
    $('.skill p').hover(
        function () {
            $(this).siblings('.rating').slideDown();
        },
        function () {
            $(this).siblings('.rating').slideUp();
        }
    );

    // Xử lý khi người dùng click vào mục trong menu bên trái
    $('.menu-item').click(function () {
        var target = $(this).data('target');
        var targetSection = $('.' + target);

        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top
            }, 800);
        }
    });
});
