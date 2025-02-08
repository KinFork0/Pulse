$(document).ready(function () {
    $('.carousel__wrapper').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel/arrow_right.svg"></button>',
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