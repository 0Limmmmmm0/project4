/*page1*/
/*카드/간편결제 혜택 popup*/
$(".bottom").click(function () {
    $(".popup").fadeIn("fast");
});
$(".close").click(function () {
    $(".popup").fadeOut();
});
/*구매수량*/
var price_All = 11700;

$(".price_All").append("<span>" + price_All.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");

$(function () {
    $('.plus').click(function () {
        if ($(".price_Pay").val() > 99) {
            alert("최대 구매 수량은 100권입니다.");
            $(".price_Pay").val(100);
        } else {
            $(".price_Pay").val(parseInt($(".price_Pay").val()) + 1);
            var sum = parseInt($(".price_Pay").val() * price_All);
            $(".price_All").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
        }
    });
    $('.minus').click(function () {
        if ($(".price_Pay").val() < 2) {
            alert("1권 이상 구매 가능합니다.");
            $(".price_Pay").val(2);
        } else {
            $(".price_Pay").val(parseInt($(".price_Pay").val()) - 1);
            var sum = parseInt($(".price_Pay").val() * price_All);
            $(".price_All").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
        }
    });
    $(function () {
        $(".price_Pay").keyup(function () {
            if ($(".price_Pay").val() > 100) {
                alert("최대 구매 수량은 100권입니다.");
                $(".price_Pay").val(100);
            } else if ($(".price_Pay").val() < 1) {
                alert("1권 이상 구매 가능합니다.");
                $(".price_Pay").val(1);
            } else if (isNaN($(".price_Pay").val())) {
                alert("숫자를 입력하세요.")
                $(".price_Pay").val(1);
            } else if (($(".price_Pay").val() * 10) % 10 != 0) {
                alert("정수를 입력하세요");
                $(".price_Pay").val(1);
            }
            var sum1 = parseInt($(".price_Pay").val() * price_All);
            $(".price_All").html("<span>" + sum1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");
        });
    });
});
/*장바구니 클릭 창*/
$(".cartClick").click(function(){
    alert("상품을 장바구니에 담았습니다.");
});
/*바로구매 클릭 창*/
$(".goClick").click(function(){
    alert("바로 구매하겠습니까?");
});
/*북 이미지 rotate*/
$('.book_img').click(function(){
    $(this).toggleClass('rotate');
});
/*마우스커서 tip*/
$(document).ready(function() {
    $(".book_cover").mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        $(".tiptxt").css({left: x +40 , top: y + 60}).addClass("on");
    }).mouseleave(function() {
        $(".tiptxt").removeClass("on");
    });
});
 /*page2 시리즈 클릭 슬라이드*/
//  $('.left').click(function(){
//     $('.series_box .content_box:last').prependTo('.series_box');
//     $('.series_box').css('margin-left','-19.89%'); /*'margin-Left',-1000*/
//     $('.series_box').stop().animate({marginLeft:0},800);
//  });
//  $('.right').click(function(){
//     $('.series_box').stop().animate({marginLeft:'-19.89%'},800,function(){
//         $('.series_box .content_box:first').appendTo('.series_box');
//         $('.series_box').css({marginLeft:0});
//     });
//  });
//  /*별점 가져오기*/
//  const noneStar = document.getElementsByClassName("noneStar")[0];
//         img1.setAttribute("src", noneStar.childNodes[1].src);
//         img2.setAttribute("src", noneStar.childNodes[2].src);
//         img3.setAttribute("src", noneStar.childNodes[5].src);
//         img4.setAttribute("src", noneStar.childNodes[7].src);
//         img5.setAttribute("src", noneStar.childNodes[9].src);

//     //댓글 별 선택
//     $(".noneStar img").click(function(){
//         $(this).attr("src", "icon/fill_star.png");
//         $(this).prevAll().attr("src", "icon/fill_star.png");
//         $(this).nextAll().attr("src", "icon/none_starfillStar");
//     })

//     $(".noneStar img").hover(function(){

//         var starIndex = $(this).index();

//         $(".fillStar img").eq(starIndex).css("opacity", 1);
//         $(".fillStar img").eq(starIndex).prevAll().css("opacity", 1);
//         $(".fillStar img").eq(starIndex).nextAll().css("opacity", 0);

//     }, function(){
//         var starIndex = $(this).index();

//         $(".fillStar img").eq(starIndex).css("opacity", 0);
//         $(".fillStar img").eq(starIndex).prevAll().css("opacity", 0);
//         $(".fillStar img").eq(starIndex).nextAll().css("opacity", 0);
//     });

 