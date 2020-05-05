"use strict";

$(function () {
    progress();
    // animateTools();
    // animateEveryDuration(10000, animateTools);
    animationToolFunc();

});
// GLOBAL FUNCTIONS
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

// LANGUAGE SECTION
$("#v-lang-header").click(function () {
    let table =  $("#v-lang-table-container");
    collapseExpand(table);
});

// EQUIPMENT SECTION
$("#equip-header").click(function () {
    let table = $("#equip-table");
    collapseExpand(table);
})

// SKILLS SECTION
$("#skills-header").click(function () {
    let skillsBars = $("#skills-bar-container");
    if (skillsBars.css("display") === "none") {
        progress();
    }
    collapseExpand(skillsBars);
})

// TOOLS SECTION
$("#tool-header").click(function () {
    let toolCatalog = $("#tool-catalog");
    if (toolCatalog.css("display") === "none") {
        animateTools();
    }
    collapseExpand(toolCatalog);
})
// --- animations ---
function animationToolFunc() { // animation function with inner-scope interval settings
    animateTools();
    let t = setInterval(function () {
        animateTools();
    }, 5000);

    $(".tool-item").hover(function () { // w/o this .tool-item:hover css effect would conflict
        clearInterval(t);
    }, function () {
        t = setInterval(function() {
            animateTools();
        }, 5000);
    });

}

function animateTools() { // individual tool animation function
    let tools = $(".tool-item");

    tools.each(function(index, value) {
        let element = $(this);
        setTimeout(function () { // Awesome visual wave-effect occurrence
            element.addClass("animateTool")
        }, 250 * index);
        setTimeout(function () { // Awesome code wave-effect occurrence
            element.removeClass("animateTool")
        }, 1000 + (index * 250));
    })

    console.log("hello");
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

