//Слайдер категорий
var swiper = new Swiper(".mySwiper", {
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
//Слайдер ссылок на мобилке
var swiper2 = new Swiper(".links-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".links-next",
        prevEl: ".links-prev",
    },
});

//Слайдер матчей
var swiper2 = new Swiper(".match-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".match-next",
        prevEl: ".match-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

//Слайдер баннеров
const promoSwiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: false,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    pagination: {
        el: ".banner-swiper-pagination",
        clickable: "true",
    },
});