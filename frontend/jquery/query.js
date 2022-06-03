$('.tstmonial-content-slick-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



function menuDropdown() {
    var dropItem = document.getElementById("menu-drop");
    if (dropItem.style.display === "none") {
        dropItem.style.display = "block";
    } else {
        dropItem.style.display = "none";
    }
}

function listDropdown() {
    var secondDropItem = document.getElementById("second-menu-drop");
    if (secondDropItem.style.display === "none") {
        secondDropItem.style.display = "block";
    } else {
        secondDropItem.style.display = "none";
    }
}