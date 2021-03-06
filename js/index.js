/*点击回到顶部*/
$(function(){
	$(window).scroll(function(){
		var scrollTop=$(document).scrollTop();
		if (scrollTop>500) {
			$('.top').fadeIn('slow')
		}else{
			$('.top').fadeOut("500")
		}
    });
    $('.top').click(function(){
    	$("html,body").animate({scrollTop:0}, 500);
    })
})
/*顶部跟随效果*/
$(function(){
   $(window).scroll(function(){
		var scrollTop=$(document).scrollTop();
		var headerH=$('.header').height();
		// console.log(scrollTop)
		if (scrollTop>headerH) {
			$('.header').css({
				'position':'fixed',
				'top':"0",
				'zIndex':'9999'
		    });
		    $('.section').css('marginTop','120px')
		}else{
            $('.header').css('position','relative');
		    $('.section').css('marginTop','60px')
		}
   })
});
/*blog页面title动画*/
$(function(){

	for (var i = 1; i < 8; i++) {
		    var num=0
			$('#BlogALL-title a').fadeIn('slow')
				.animate({
					'top':(num+1)+"00px",
					"left":i+"00px"
				},1200)
				.animate({
					'top':num+"00px",
					"left":(i+1)+"00px"
				},1200)
				.animate({
					'top':(num+1)+"00px",
					"left":(i+2)+"00px"
				},1200).fadeOut()
		
	}
	for (var i = 1; i < 9; i++) {
		    var num=0
			$('#BlogALL-title a').fadeIn('slow')
				.animate({
					'top':(num+1)+"00px",
					"left":(10-i)+"00px"
				},1200)
				.animate({
					'top':num+"00px",
					"left":(10-(i+1))+"00px"
				},1200)
				.animate({
					'top':(num+1)+"00px",
					"left":(10-(i+2))+"00px"
				},1200).fadeOut();
		
	}

})
/*about*/
$(function(){
	$('.icon-weibo').mouseenter(function(){
		$('.vb').fadeIn('slow');
	})
	$('.icon-weibo').mouseleave(function(){
		$('.vb').fadeOut('slow')
	})
})
/*h5nav点击效果*/
$(function(){
	var $nav = $('.header-nav ul');
	var viewWidth = $(window).width();
    var viewHeight = $(window).height();
    var desWidth = 640;
    var touchstart = 'touchstart';
    var touchmove = 'touchmove';
    var touchend = 'touchend';

	$('.navMobileLogo').on('click',function(e){
		e.stopPropagation();
		

		if( $nav.hasClass('navMobile') ){
			$nav.addClass('header-nav-nav').removeClass('navMobile')
		}
		else{
			$('.navMobile').css('display','block')
			$nav.addClass('navMobile').removeClass('header-nav-nav')
		}
	});
	$('body').on('click', function(){
		$nav.addClass('header-nav-nav').removeClass('navMobile')
	});
	$nav.find('li').on('click', function(){
		$nav.addClass('header-nav-nav').removeClass('navMobile')
	});

    function device(){
	     /*resize检测尺寸变化*/
	    $(window).resize(function(){
	       viewWidth = $(window).width();
	       viewHeight = $(window).height();
	    });
    // console.log(navigator.userAgent)
        if (!isMobile) {
          touchstart = 'mousedown';
          touchmove = 'mousemove';
          touchend = 'mouseup';
        }
    }

    $nav.find('li').on(touchmove, function(){
		$(this).addClass('changecolor').siblings().removeClass('changecolor')
	});



})



