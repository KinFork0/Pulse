$(document).ready(function () {
    $('.carousel__wrapper').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../arrow_left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../arrow_right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});