/*page6 책 속의 한 줄 slick slide*/
$('#center').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});
/*page7 미디어 추천 도서 slick slide*/
$('.boxcover4').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
});

/*page2 - series*/
$('#series_box').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
});

