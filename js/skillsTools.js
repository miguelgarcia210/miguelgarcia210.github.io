"use strict";

$(function () {
    progress();
});

function progress () {
    let meters = $(".skill-meter");
    meters.each(function () {
        let skillPercentage = $(this).next();
        $({ Counter: 0 }).animate({ Counter: parseInt(skillPercentage.text()) }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                skillPercentage.text(Math.ceil(this.Counter) + "%");
            }
        });
    });
}

