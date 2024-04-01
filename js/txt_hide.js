/*page3 - content*/
/*책 소개글 텍스트 가져오기*/
$(function () {
    $.get("./sub_txt/txt3.txt", function (data) {
        $(".book_text").html(data);
    })
});
/*편집장의 선택 텍스트 가져오기*/
$(function () {
    $.get("./sub_txt/txt6.txt", function (data) {
        $(".txt_six").html(data);
    })
});
/*후기 작성 가져오기*/
$(function () {
    $.get("./sub_txt/txt5.txt", function (data) {
        $(".txtbox5").html(data);
    })
});
/*page4 출판사리뷰 텍스트 가져오기*/
$(function () {
    $.get("./sub_txt/txt2.txt", function (data) {
        $("#publisherWrap").html(data);
    })

});
/*배송/반품/교환 텍스트 가져오기*/
$(function () {
    $.get("./sub_txt/txt4.txt", function (data) {
        $(".booktxtBox2").html(data);
    })

});
/*page4 출판사리뷰 텍스트 가져오기*/
$(function () {
    $.get("./sub_txt/txt2.txt", function (data) {
        $("#publisherWrap").html(data);
    })

});
/*page4 출판사리뷰 텍스트 숨기기*/
$(function(){
    $('.publisher_toggle_op').click(function(g){ /*펼쳐보기 클릭 시*/
        g.preventDefault();

        $(this).stop().hide();

        $('.publisher_toggle_cl').stop().show(); /*접어보기가 보여짐*/

        $('#sub_review').height(1990).css('padding-bottom','40px');

        $('#publisherWrap').height(2000); /*publisherWrap 숨겨진 텍스트 height 값을 지정함*/

        $('.publisher_toggle > a').css({"padding":"0 15px 9px 0","background":"none"});
    });

    $('.publisher_toggle_cl').click(function(g){
        g.preventDefault();

        $(this).stop().hide();

        $('.publisher_toggle_op').stop().show();

        $('#sub_review').height(356).css('padding-bottom','none');

        $('#publisherWrap').height(390).css('overflow','none');

        $('.publisher_toggle > a').css({"padding":"55px 15px 9px 0","background":"url('./img/sub/background_gr.png')"});
    });
});
/*page4 추천평 텍스트 가져오기*/
$(function () {
    $.get("./sub_txt/txt1.txt", function (data) {
        $(".recommend_txt").html(data);
    })

});