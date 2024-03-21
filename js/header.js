$(document).ready(function(){
  var currentScrollTop=0;
  $(window).scroll(function(){
    currentScrollTop=$(window).scrollTop();
    if(currentScrollTop>100){
      $("header").addClass("fixed");
      $("header a").addClass("txtCh");
    }else{
      $("header").removeClass("fixed");
      $("header a").removeClass("textCh");
    }
  });
});

