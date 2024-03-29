/*sub*/
/*page2 - series*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "테레사의 오리무중" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(1)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(1)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(1)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(1)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(1)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "날개 절제술" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(2)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(2)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(2)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(2)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(2)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "초록은 어디에나" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(3)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(3)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(3)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(3)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(3)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "갱들의 어머니" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(4)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(4)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(4)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(4)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(4)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "누의 자리" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(5)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(5)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(5)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(5)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(5)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "엄마를 절에 버리러" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(6)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(6)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(6)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(6)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(6)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "녹색 갈증" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(7)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(7)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(7)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(7)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(7)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "모든 것들의 세계" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(8)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(8)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(8)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(8)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(8)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "방어가 제철" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(9)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(9)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(9)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(9)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(9)").append("<button>" + "구매하기" + "</button>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "러브 플랜트" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".series_box > .content_box:nth-of-type(10)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".series_box > .content_box:nth-of-type(10)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".series_box > .content_box:nth-of-type(10)").append("<p>" + msg.documents[0].authors + "</p>");
        $(".series_box > .content_box:nth-of-type(10)").append("<p>" + msg.documents[0].price + "원" + "</p>");
        $(".series_box > .content_box:nth-of-type(10)").append("<button>" + "구매하기" + "</button>");
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
        $("#gbox>.box:nth-of-type(1)").append("<h3>" + msg.documents[0].title + "</h3>");
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
        $("#gbox>.box:nth-of-type(2)").append("<h3>" + msg.documents[0].title + "</h3>");
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
        $("#gbox>.box:nth-of-type(3)").append("<h3>" + msg.documents[0].title + "</h3>");
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
        $("#gbox>.box:nth-of-type(4)").append("<h3>" + msg.documents[0].title + "</h3>");
        $("#gbox>.box:nth-of-type(4)").append("<p>" + msg.documents[0].authors + "</p>");
        $("#gbox>.box:nth-of-type(4)").append("<p>" + msg.documents[0].price + "원" + "</p>");
    });