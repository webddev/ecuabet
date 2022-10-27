var swiperGames = new Swiper(".gamesSwiper", {
    slidesPerView: 6,
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
            slidesPerView: 5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});