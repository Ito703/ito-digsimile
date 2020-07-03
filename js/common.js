
$(function() {
    // smooth scroll
	// -----------------------------------------------------------------------
	$('a[href^="#"]').click(function () {
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;

		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});

    // Toggle Menu
	// -----------------------------------------------------------------------
    var currentScroll;

    $('.js-toggle').on('click', function(){
        $(this).toggleClass('is-active');
        $('.header__menu').toggleClass('is-active');

        if ($(this).hasClass('is-active')) {
			currentScroll = $(window).scrollTop();
			$('.wrap').css({
				position: 'fixed',
				width: '100%',
				top: -1 * (currentScroll )
			});
		} else {
			$('.wrap').attr({
				style: ''
			});
			$(window).scrollTop(currentScroll);
		}

    });

    // オブジェクトを変数に格納
    // header = $('header')
    // // スクロールしたときの、処理
    // $(window).on('scroll', function(){
    //     // スクロールした量
    //     scroll = $(this).scrollTop()　

    //     // スクロールした量
    //     if (scroll > 300){
    //         if(!header.hasClass('fixed')){
    //             header.addClass('fixed')
    //         }
    //     } else {
    //         if(header.hasClass('fixed')){
    //             header.removeClass('fixed')
    //         }
    //     }
    // });
});
