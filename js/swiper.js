/*page4 새로 들어온 책 swiper*/
var swiper = new Swiper(".first", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
