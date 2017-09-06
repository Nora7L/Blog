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
		if (scrollTop>headerH+60) {
			$('.header').css({
				'position':'fixed',
				'top':"0"
		    });
		    $('.section').css('marginTop','120px')
		}else{
            $('.header').css('position','static');
		    $('.section').css('marginTop','60px')
		}
   })
});
