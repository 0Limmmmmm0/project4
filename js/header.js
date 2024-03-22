/*header scroll event*/
$(document).ready(function(){
  var currentScrollTop=0;
  $(window).scroll(function(){
    currentScrollTop=$(window).scrollTop();
    if(currentScrollTop>100){
      $("header").addClass("fixed");
      $("header a").addClass("txtCh");
      $(".logo_hide").show();
      $(".img_show").hide();
      $(".glass_hide").show();
      $(".glass_show").hide();
      $(".user_hide").show();
      $(".user_show").hide();
      $(".menu_icon_hide").show();
      $(".menu_icon").hide();
    }else{
      $("header").removeClass("fixed");
      $("header a").removeClass("txtCh");
      $(".img_show").show();
      $(".logo_hide").hide();
      $(".glass_show").show();
      $(".glass_hide").hide();
      $(".user_show").show();
      $(".user_hide").hide();
      $(".menu_icon").show();
      $(".menu_icon_hide").hide();
    }
  });
});

/*popup*/
window.onload = function(){
  $('#popup').show();
  $('.close').click(function(){
   $('#popup').hide();
  });
};

/*햄버거 아이콘*/
$(document).ready(function() {
  const menuIcon = $('.menu_icon');
  menuIcon.click(function(e) {
      e.preventDefault();
      menuIcon.toggleClass('active');
  });
});
