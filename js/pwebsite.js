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

$(document).ready(function () {
    setInterval('swapImages()', 8000);
    // MOBILE MENU FUNCTIONALITY
    let mobileMenu = $('.m-menu');
    mobileMenu.click(function(e) {
        e.preventDefault();

        // assigned a variable to a function returning a non-static jQuery selection
        let dNav = function() {
            return $('.d-nav-list');
        };

        let header = $('header');

        header.toggleClass('active');
        dNav().slideToggle(500, "linear").css("display", "flex");

    });
});
// }) ();
