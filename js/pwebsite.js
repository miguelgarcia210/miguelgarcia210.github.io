// (function () {
"use strict";

function swapImages() {
    var firstImg = $('.pillar-icon img:nth-child(1)');
    var secondImg = $('.pillar-icon img:nth-child(2)');

    // if ($('.pillar-icon img:nth-child(1)').hasClass('active')) {
    //     $('.pillar-icon img:nth-child(1)').removeClass("active").addClass("non-active").hide();
    //     $('.pillar-icon img:nth-child(2)').fadeIn(3000).removeClass("non-active").addClass("active").show();
    // } else {
    //     $('.pillar-icon img:nth-child(1)').fadeIn(3000).removeClass('non-active').addClass('active').show();
    //     $('.pillar-icon img:nth-child(2)').removeClass('active').addClass('non-active').hide();
    // }
    if (firstImg.hasClass('active')) {
        // secondImg.show().fadeIn(2000).removeClass("non-active").addClass("active");
        // firstImg.hide().removeClass("active").addClass("non-active");

        firstImg.removeClass("active").addClass("non-active").hide();
        secondImg.removeClass("non-active").addClass("active").fadeIn(2000).show();
    } else {
        // firstImg.show().fadeIn(2000).removeClass('non-active').addClass('active');
        // secondImg.hide().removeClass('active').addClass('non-active');

        firstImg.removeClass('non-active').addClass('active').fadeIn(2000).show();
        secondImg.removeClass('active').addClass('non-active').hide();

    }
}

//
// particlesJS("home-splash", {
//     "particles": {
//         "number": {
//             "value": 200,
//             "density": {
//                 "enable": true,
//                 "value_area": 789.1476416322727
//             }
//         },
//         "color": {
//             "value": "#ffffff"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//             "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//             }
//         },
//         "opacity": {
//             "value": 0.48927153781200905,
//             "random": false,
//             "anim": {
//                 "enable": true,
//                 "speed": 0.2,
//                 "opacity_min": 0,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 2,
//             "random": true,
//             "anim": {
//                 "enable": true,
//                 "speed": 2,
//                 "size_min": 0,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": false,
//             "distance": 150,
//             "color": "#ffffff",
//             "opacity": 0.4,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 0.2,
//             "direction": "none",
//             "random": true,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": true,
//                 "mode": "bubble"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "push"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 400,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 83.91608391608392,
//                 "size": 1,
//                 "duration": 3,
//                 "opacity": 1,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// });


$(document).ready(function () {
    setInterval('swapImages()', 8000);
});
// }) ();
