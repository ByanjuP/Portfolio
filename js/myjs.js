var slider = tns({
    container: '.tns-slider-1',
    items: 2,
    edgePadding: 10,
    autoplayHoverPause: true,
    gutter: 0,
    nav: false,
    controls: false,
    mouseDrag: true,
    autoplay: true,
    speed: 2000,
    rewind: true,
    loop: true,
    responsive: {
        576: {
            edgePadding: 10,
            gutter: 10,
            items: 2
        },
        768: {
            items: 2,
            gutter: 20
        },
        992: {
            items: 3
        },
        1200: {
            items: 4,
            gutter: 20
        },
        1400: {
            items: 5,
            edgePadding: 20,
            gutter: 20,
            loop: true,
            speed: 1000,


        }


    }
});

lightGallery(document.getElementById('static-thumbnails'), {
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});


