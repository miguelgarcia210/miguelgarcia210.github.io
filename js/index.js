"use strict";

$(document).ready(function () {
    setInterval('swapImages()', 8000);
});

$(window).on("load", function() {
    // Handler for .load() called.
    devNameColorChange();
});

let devNameColors = [
    "#E1236E",
    "#298FEA",
    "#4bce3f",
    "#e1bb23"
];

function swapImages() {
    let firstImg = $('.pillar-icon img:nth-child(1)');
    let secondImg = $('.pillar-icon img:nth-child(2)');

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

/*
    devNameColorChange():
    // https://stackoverflow.com/questions/31186242/background-color-change-onload-javascripthtml#answer-31187524
        Iterate through an array of colors
        Randomly select a color, color is selected if it was not the previous set color
        Previous set color is determined by utilizing localStorage
        - https://www.w3schools.com/html/html5_webstorage.asp
 */
function devNameColorChange() {
    let lastColorIndex = localStorage.getItem('lastColorIndex') || -1; // retrieve lastColorIndex # or set -1 if non-existent
    let randomColor = -1;
    while (lastColorIndex == randomColor || randomColor === -1) { // lastColorIndex same to random color(TRUTHY) OR non-existent = non-existent
        randomColor = Math.floor(Math.random() * devNameColors.length); // generates # between 0 and Array length;
        // console.log('LastIndex: ' + lastColorIndex + ',RandomColor: ' + randomColor);
    }
    localStorage.setItem('lastColorIndex', randomColor);
    $('#dev-name').css('color', devNameColors[randomColor]);
}