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
});


const accordeon = document.getElementsByClassName("block-info");

for (let i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener("click", function () {
        this.classList.toggle("block-info_active");

        const accordeonItem = this.nextElementSibling;
        accordeonItem.classList.toggle('hidden')

    })
}

const accordeon2 = document.getElementsByClassName("block-info-hidden__subblock");

for (let i = 0; i < accordeon2.length; i++) {
    accordeon2[i].addEventListener("click", function () {
        this.classList.toggle("block-info-hidden__subblock_active");

        const accordeonItem = this.nextElementSibling;
        accordeonItem.classList.toggle('hidden')

    })
}

// Аккордеон
// const accordeon = document.getElementsByClassName("block-info");

// for (let i = 0; i < accordeon.length; i++) {
//     accordeon[i].addEventListener("click", function () {
//         this.classList.toggle("block-info_active"); // Управление иконкой аккордеона

//         // Показываем / скрываем блок с текстом
//         const accordeonItem = this.nextElementSibling;
//         if (
//             (accordeonItem.style.height === "0px",
//                 accordeonItem.style.opacity === "0",
//                 accordeonItem.style.padding === "0px",
//                 accordeonItem.style.zIndex === "-1")
//         ) {
//             accordeonItem.style.height = "100%";
//             accordeonItem.style.opacity = "1";
//             accordeonItem.style.padding = "0 0 1px 0";
//             accordeonItem.style.zIndex = "1";

//         } else {
//             accordeonItem.style.height = "0px";
//             accordeonItem.style.opacity = "0";
//             accordeonItem.style.padding = "0px";
//             accordeonItem.style.zIndex = "-1";
//         }
//     });
// }

// Аккордеон 2
// const accordeon2 = document.getElementsByClassName("block-info-hidden__subblock");

// for (let i = 0; i < accordeon2.length; i++) {
//     accordeon2[i].addEventListener("click", function () {
//         this.classList.toggle("block-info-hidden__subblock_active"); // Управление иконкой аккордеона

//         // Показываем / скрываем блок с текстом
//         const accordeonItem = this.nextElementSibling;
//         if (
//             (accordeonItem.style.height === "0px",
//                 accordeonItem.style.opacity === "0",
//                 accordeonItem.style.padding === "0px",
//                 accordeonItem.style.zIndex === '-1'
//             )
//         ) {
//             accordeonItem.style.height = "100%";
//             accordeonItem.style.opacity = "1";
//             accordeonItem.style.padding = "0 30px 20px 10px";
//             accordeonItem.style.zIndex = '1'

//         } else {
//             accordeonItem.style.height = "0px";
//             accordeonItem.style.opacity = "0";
//             accordeonItem.style.padding = "0px";
//             accordeonItem.style.zIndex = '-1'
//         }
//     });
// }