$(function(){
   $('.title').click(function(){
    $('.box').slideUp(500);
	var findElm = $(this).next(".box");
	if($(this).hasClass('close')){
		$(this).removeClass('close');    
	}else{
		$('.close').removeClass('close');
		$(this).addClass('close');
		$(findElm).slideDown(500);
	}
   });
});
$(window).on('load',function(){
   $('.accordion-area li:first-of-type section').addClass('open');
   $('.open').each(function(index,element){
      $(element).children('.title').addClass('close');
      $(element).children('.box').slideDown(500);
   });
});
$(function(){
   $('.title2').click(function(){
     if($('.title-ex').hasClass('open')){
        $('.title-ex').removeClass('open')
        $('.title-ex').slideUp(600);
     } else{
      $('.title-ex').addClass('open');
      $('.title-ex').slideDown(600);
     };
   });
});