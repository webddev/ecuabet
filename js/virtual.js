var swiper = new Swiper(".vCategory", {
    slidesPerView: 10,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 12,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 10,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 9,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});