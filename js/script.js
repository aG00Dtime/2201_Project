//animate of scroll init
AOS.init();
document.documentElement.style.setProperty('--animate-duration', '.5s');
// menu
$(document).ready(function() {

    $nav = $('.nav');
    $toggle = $('.menu');

    $toggle.click(function() {
        $nav.toggleClass('collapse');
    })


});

// for the carousel
$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dotsEach: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1

            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    }

)