document.addEventListener("DOMContentLoaded", function () {
    const resurseContainer = document.getElementById("resurseContainer");
    const swiperContainer = document.getElementById("swiperContainer");

    resurseContainer.addEventListener("dblclick", function () {
        resurseContainer.style.display = "none";
        swiperContainer.style.display = "flex";
    });

    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});