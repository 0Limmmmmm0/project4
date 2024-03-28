/* page3 - content */
// $(document).ready(function () {

//     $("#tab_menu1").click(function () {

//         $(".tab_sub1").fadeIn();

//         $(".tab_sub2, .tab_sub3, .tab_sub4").fadeOut("fast");

//         $("#tab_menu1").addClass("active");

//         $("#tab_menu2, #tab_menu3, #tab_menu4").removeClass("active");

//     });


//     $("#tab_menu2").click(function () {

//         $(".tab_sub2").fadeIn();

//         $(".tab_sub1, .tab_sub3, .tab_sub4").fadeOut("fast");

//         $("#tab_menu2").addClass("active");

//         $("#tab_menu1, #tab_menu3, #tab_sub4").removeClass("active");

//     });

//     $("#tab_menu3").click(function () {

//         $(".tab_sub3").fadeIn();

//         $(".tab_sub1, .tab_sub2, .tab_sub4").fadeOut("fast");

//         $("#tab_menu3").addClass("active");

//         $("#tab_menu1, #tab_menu2, #tab_menu4").removeClass("active");

//     });
//     $("#tab_menu4").click(function () {

//         $(".tab_sub4").fadeIn();

//         $(".tab_sub1, .tab_sub2, .tab_sub3").fadeOut("fast");

//         $("#tab_menu4").addClass("active");

//         $("#tab_menu1, #tab_menu2, #tab_menu3").removeClass("active");

//     });

// });
$(".tab_menu").click(function(){

    $(".tab_menu").removeClass("active");
    $(this).addClass("active");

    var menuClick = $(this).index();

    $(".tab_sub").eq(menuClick).fadeIn().siblings().fadeOut("fast");

});
