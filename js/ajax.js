/*베스트셀러*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "성공" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        var box = document.getElementsByClassName("box");
        for (var g = 0; g < box.length; g++) {
            $(".best_box>.box").eq(g).append("<img src ='" + msg.documents[g].thumbnail + "'/>");
            $(".best_box>.box").eq(g).append("<h3>" + msg.documents[g].title + "</h3>");
            $(".best_box>.box").eq(g).append("<h6>" + msg.documents[g].authors + "</h6>");
        }
    });

/*새로 들어온 책*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이어령의 강의" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(1)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(1)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(1)").append("<h6>" + msg.documents[0].authors + "</h6>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영화의 이론" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(2)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(2)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(2)").append("<h6>" + msg.documents[0].authors + "</h6>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "독일인의 전쟁" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(3)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(3)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(3)").append("<h6>" + msg.documents[0].authors + "</h6>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "패턴 시커" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(4)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(4)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(4)").append("<h6>" + msg.documents[0].authors + "</h6>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "범죄 사회" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(5)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(5)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(5)").append("<h6>" + msg.documents[0].authors + "</h6>");
    });
