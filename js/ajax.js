/*베스트셀러*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "성공" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        var box = $(".best_box>.box");
        for (var g = 0; g < box.length; g++) {
            $(".best_box>.box").eq(g).append("<img src ='" + msg.documents[g].thumbnail + "'/>");
            $(".best_box>.box").eq(g).append("<h3>" + msg.documents[g].title + "</h3>");
            $(".best_box>.box").eq(g).append("<p>" + msg.documents[g].authors + "</p>");
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
        $(".boxcover>.box:nth-of-type(1)").append("<p>" + msg.documents[0].authors + "</p>");
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
        $(".boxcover>.box:nth-of-type(2)").append("<p>" + msg.documents[0].authors + "</p>");
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
        $(".boxcover>.box:nth-of-type(3)").append("<p>" + msg.documents[0].authors + "</p>");
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
        $(".boxcover>.box:nth-of-type(4)").append("<p>" + msg.documents[0].authors + "</p>");
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
        $(".boxcover>.box:nth-of-type(5)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나는 해녀이다" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(6)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(6)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(6)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "자본의 성별" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(7)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(7)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(7)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "가시고기" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(7)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(7)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(7)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마술" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(8)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(8)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(8)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "일상영성" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(9)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(9)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(9)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "샤론의 장미" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".boxcover>.box:nth-of-type(10)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".boxcover>.box:nth-of-type(10)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".boxcover>.box:nth-of-type(10)").append("<p>" + msg.documents[0].authors + "</p>");
    })

/*미디어 추천 도서*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "중독의 역사" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".box_book_tull>.box_book1").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "뒷자리" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".box_book_tull>.box_book2").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "기꺼이 나의 죽음에 동의합니다" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".box_book_tull>.box_book3").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "야구의 나라" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".box_book_tull>.box_book4").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    });

/*새로 들어온 책*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이어령의 강의" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(1)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(1)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(1)").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영화의 이론" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(2)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(2)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(2)").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "독일인의 전쟁" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(3)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(3)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(3)").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "패턴 시커" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(4)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(4)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(4)").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "범죄 사회" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(5)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(5)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(5)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나는 해녀이다" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(6)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(6)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(6)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "자본의 성별" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(7)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(7)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(7)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "가시고기" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(7)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(7)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(7)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마술" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(8)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(8)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(8)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "일상영성" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(9)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(9)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(9)").append("<p>" + msg.documents[0].authors + "</p>");
    });
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "샤론의 장미" },
    headers: { Authorization: "KakaoAK 380246aa8cbc20e48b9e8000995f2c3c" }
})
    .done(function (msg) {
        $(".swiper-wrapper>.swiper-slide:nth-of-type(10)").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(10)").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".swiper-wrapper>.swiper-slide:nth-of-type(10)").append("<p>" + msg.documents[0].authors + "</p>");
    })



