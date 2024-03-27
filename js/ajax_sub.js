/*sub*/
/*page2 - series*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "테레사의 오리무중" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $("#series_box > .content_box:nth-of-type(1)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $("#series_box > .content_box:nth-of-type(1)").append("<h3>" + msg.documents[0].title + "</h3>");
        $("#series_box > .content_box:nth-of-type(1)").append("<p>" + msg.documents[0].authors + "</p>");
    });
/*page5 작가의 다른 작품*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이웃집 소시오패스의 사정" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $("#gbox>.box:nth-of-type(1)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $("#gbox>.box:nth-of-type(1)").append("<h4>" + msg.documents[0].title + "</h4>");
        $("#gbox>.box:nth-of-type(1)").append("<p>" + msg.documents[0].authors + "</p>");
        $("#gbox>.box:nth-of-type(1)").append("<p>" + msg.documents[0].price + "원" + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "트로피컬 나이트" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $("#gbox>.box:nth-of-type(2)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $("#gbox>.box:nth-of-type(2)").append("<h4>" + msg.documents[0].title + "</h4>");
        $("#gbox>.box:nth-of-type(2)").append("<p>" + msg.documents[0].authors + "</p>");
        $("#gbox>.box:nth-of-type(2)").append("<p>" + msg.documents[0].price + "원" + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "테디베어는 죽지 않아" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $("#gbox>.box:nth-of-type(3)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $("#gbox>.box:nth-of-type(3)").append("<h4>" + msg.documents[0].title + "</h4>");
        $("#gbox>.box:nth-of-type(3)").append("<p>" + msg.documents[0].authors + "</p>");
        $("#gbox>.box:nth-of-type(3)").append("<p>" + msg.documents[0].price + "원" + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "만조를 기다리며" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $("#gbox>.box:nth-of-type(4)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $("#gbox>.box:nth-of-type(4)").append("<h4>" + msg.documents[0].title + "</h4>");
        $("#gbox>.box:nth-of-type(4)").append("<p>" + msg.documents[0].authors + "</p>");
        $("#gbox>.box:nth-of-type(4)").append("<p>" + msg.documents[0].price + "원" + "</p>");
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


