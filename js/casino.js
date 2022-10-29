var swiperGames = new Swiper(".casinoSwiper", {
    slidesPerView: 10,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 10,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        575: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
        0: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});

var swiperGames = new Swiper(".casinoCategoriesSwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".caterogy-button-next",

    },
    breakpoints: {
        575: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        0: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
});