"use strict";

$(function () {
    progress();
});

$("#v-lang-header").click(function () {
    let table =  $("#v-lang-table-container");
    collapseExpand(table);
});

$("#equip-header").click(function () {
    let table = $("#equip-table");
    collapseExpand(table);
})

function collapseExpand(elem) {
    // elem
    //     .stop(true, true)
    //     .animate({
    //         height:"toggle",
    //         opacity:"toggle"
    //     },200);
    elem.slideToggle({
        duration: 400,
        easing: "swing"
    })
}

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

