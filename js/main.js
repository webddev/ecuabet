// Раскрытие блока
const accordeon = document.getElementsByClassName("block-info");

for (let i = 0; i < accordeon.length; i++) {
    accordeon[i]?.addEventListener("click", function () {
        this.classList.toggle("block-info_active");

        const accordeonItem = this.nextElementSibling;
        accordeonItem.classList.toggle('hidden')

    })
}
// Раскрытие подблока
const accordeon2 = document.getElementsByClassName("block-info-hidden__subblock");

for (let i = 0; i < accordeon2.length; i++) {
    accordeon2[i]?.addEventListener("click", function () {
        this.classList.toggle("block-info-hidden__subblock_active");

        const accordeonItem = this.nextElementSibling;
        accordeonItem.classList.toggle('hidden')

    })
}

// Аккордеон настроек
const accordeonSettings = document.querySelector(".block-aside__settings");
accordeonSettings?.addEventListener("click", function () {
    this.classList.toggle("block-aside__settings_active"); // Управление иконкой аккордеона

    // Показываем / скрываем блок с текстом
    const accordeonItem = document.querySelector('.block-aside__settings-options')
    if (
        (accordeonItem.style.height === "0",
            accordeonItem.style.opacity === "0",
            accordeonItem.style.padding === "0",
            accordeonSettings.style.borderBottomLeftRadius === '5px',
            accordeonSettings.style.borderBottomRightRadius === '5px'
        )
    ) {
        accordeonItem.style.height = "fit-content";
        accordeonItem.style.opacity = "1";
        accordeonItem.style.padding = "16px 10px 20px 10px";
        accordeonSettings.style.borderBottomLeftRadius = '0';
        accordeonSettings.style.borderBottomRightRadius = '0'

    } else {
        accordeonItem.style.height = "0";
        accordeonItem.style.opacity = "0";
        accordeonItem.style.padding = "0";
        accordeonSettings.style.borderBottomLeftRadius = '5px';
        accordeonSettings.style.borderBottomRightRadius = '5px';
    }
});

//Открытие меню 

const hamb = document.querySelector('.ham3')
const hamb2 = document.querySelector('.ham3-close')
const mobMenu = document.querySelector('.mobile-menu')

hamb?.addEventListener('click', function () {
    if (mobMenu.style.display === 'none') {
        mobMenu.style.display = 'block';
        this.style.display = 'none'
        hamb2.style.display = 'block'
        hamb2.classList.add('active')
    }
})

//Закрытие меню
hamb2?.addEventListener('click', function () {
    const mobMenu = document.querySelector('.mobile-menu')
    if (mobMenu.style.display === 'block') {
        mobMenu.style.display = 'none'
        this.style.display = 'none'
        hamb.style.display = 'block'
        hamb.classList.remove('active')
    }
})

//Список левого меню
const accordeon3 = document.getElementsByClassName("menu-left__sports");

for (let i = 0; i < accordeon3.length; i++) {
    accordeon3[i]?.addEventListener("click", function () {
        this.classList.toggle("menu-left__sports_active");

        const accordeonItem = this.nextElementSibling;
        accordeonItem.classList.toggle('hidden')

    })
}
// Подсписок левого меню
const accordeon4 = document.getElementsByClassName("openMenuLeftSubBlock");


for (let i = 0; i < accordeon4.length; i++) {
    accordeon4[i]?.addEventListener("click", function () {
        console.log(accordeon4)
        this.parentNode.classList.toggle("menu-left__country_active");

        const accordeonItem = this.nextElementSibling;
        accordeonItem.classList.toggle('hidden')

    })
}

const lotsItem = document.getElementsByClassName("lots__item");

for (let i = 0; i < lotsItem.length; i++) {
    lotsItem[i]?.addEventListener("click", function () {
        this.classList.toggle("lots__item_active");

        const accordeonItem = this.nextElementSibling;
        accordeonItem.classList.toggle('hidden')

    })
}