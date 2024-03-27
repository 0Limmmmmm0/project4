/* page3 - content */
$(document).ready(function(){
    $('.click_menu').click(function(){
        let index = $(this).index();

        $('.tab_sub, .booktxtBox').eq(index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });
});