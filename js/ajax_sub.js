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
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "날개 절제술" },
        headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
    })
        .done(function (msg) {
            $("#series_box > .content_box:nth-of-type(2)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
            $("#series_box > .content_box:nth-of-type(2)").append("<h3>" + msg.documents[0].title + "</h3>");
            $("#series_box > .content_box:nth-of-type(2)").append("<p>" + msg.documents[0].authors + "</p>");
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



