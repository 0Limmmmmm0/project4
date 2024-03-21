/*page1 slide*/
function slide(){

    $('#slide').stop().animate({marginLeft:"-33.3%"}, 800, function(){

       $('#slider_box:first').appendTo('#slide');

       $('#slide').css({marginLeft:0});

    });

 }


 setInterval(slide, 3000);

 /*page5 클릭 슬라이드*/
 $('.prev').click(function(){
    $('.boxcover2 .box:last').prependTo('.boxcover2');
    $('.boxcover2').css('margin-left','-34.9%'); /*'margin-Left',-1000*/
    $('.boxcover2').stop().animate({marginLeft:0},800);
 });
 $('.next').click(function(){
    $('.boxcover2').stop().animate({marginLeft:'-34.9%'},800,function(){
        $('.boxcover2 .box:first').appendTo('.boxcover2');
        $('.boxcover2').css({marginLeft:0});
    });
 });


