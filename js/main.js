// card slider
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

function handleScrollNext(direction) {
    const cards = document.querySelector('.card-content')
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 6 > 600 ? window.innerWidth / 6 : window.innerWidth - 100
}

function handleScrollPrev(direction) {
    const cards = document.querySelector('.card-content')
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 6 > 600 ? window.innerWidth / 6 : window.innerWidth - 100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)



$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
        nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});