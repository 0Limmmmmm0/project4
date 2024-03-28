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

$(".cartClick").click(function(){
    alert("상품을 장바구니에 담았습니다.");
});

$(".goClick").click(function(){
    alert("바로 구매하겠습니까?");
});
