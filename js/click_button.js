/* page3 - content */
$(".tab_menu").click(function(){

    $(".tab_menu").removeClass("active");
    $(this).addClass("active");

    var menuClick = $(this).index();

    $(".tab_sub").eq(menuClick).fadeIn().siblings().hide();

});
