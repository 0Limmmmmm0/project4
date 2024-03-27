/*page3 - content
    카드뉴스로 보는 책 */
$('.prev').click(function(){

    $('.card_slide li:last').prependTo('.card_slide');

    $('.card_slide').css('margin-left',-5000);

    $('.card_slide').stop().animate({marginLeft:0},800);

 });


 $('.next').click(function(){

   $('.card_slide').stop().animate({marginLeft:-5000},800, function(){

      $('.card_slide li:first').appendTo('.card_slide');

      $('.card_slide').css({marginLeft:0});

   });

 });
