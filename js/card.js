/*page3 - content
    카드뉴스로 보는 책 */
$('.prev').click(function(){
  $('.card_slide .card_slide_box:last').prependTo('.card_slide');
  $('.card_slide').css('margin-left','-100%'); /*'margin-Left',-1000*/
  $('.card_slide').stop().animate({marginLeft:0},1100);
});
$('.next').click(function(){
  $('.card_slide').stop().animate({marginLeft:'-100%'},1100,function(){
      $('.card_slide .card_slide_box:first').appendTo('.card_slide');
      $('.card_slide').css({marginLeft:0});
  });
});