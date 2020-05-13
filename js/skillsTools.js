(function () { // IIFE for variable/function isolation
    "use strict";

    $(function () {
        animateMeters();
        progressPercentage();
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

    function collapseExpandIndicator(elem) {
        elem.find('.exp-coll-head-cont').toggleClass('opened');
    }

    function clickSaver(element, bindFunctionName, delayTime) { // pass clicked element
        setTimeout(function() {
            element.on('click', bindFunctionName)
        }, delayTime)
    }

    function displayState(element) {
        return element.css("display") === "none";
    }

// LANGUAGE SECTION
    $("#v-lang-header").on('click', langHeaderClick);

    function langHeaderClick (event) {
        event.stopPropagation();
        $(this).off(); // unbind click
        let table = $("#v-lang-table-container");
        collapseExpand(table);
        collapseExpandIndicator($(this));
        clickSaver($(this), langHeaderClick, 400) // rebinds 'click' event, 400: slideToggle completionTime
    }

// EQUIPMENT SECTION
    $("#equip-header").click(function () {
        let table = $("#equip-table");
        collapseExpand(table);
        collapseExpandIndicator($(this));
    })

// SKILLS SECTION
//     $("#skills-header").click(function (e) {
//         e.preventDefault();
//         let skillsBars = $("#skills-bar-container");
//         if (skillsBars.css("display") === "none") {
//             animateMeters();
//             progressPercentage();
//         }
//         collapseExpand(skillsBars);
//         collapseExpandIndicator($(this));
//     })

    $("#skills-header").on('click', skillsHeaderClick);

    function skillsHeaderClick(event) {
        event.stopPropagation();
        let skillsBars = $("#skills-bar-container");
        let skillsHeader = $("#skills-header");
        skillsHeader.off('click'); // unbind click
        if (skillsBars.css("display") === "none") {
            animateMeters();
            progressPercentage();
            clickSaver(skillsHeader,skillsHeaderClick, 2000); // rebinds 'click' event, 2000: animateMeter completionTime
        } else {
            clickSaver(skillsHeader, skillsHeaderClick, 400); // rebinds 'click' event, 400: slideToggle completionTime
        }
        collapseExpand(skillsBars);
        collapseExpandIndicator(skillsHeader);
    }

    function animateMeters() {
        let skillMeters = $(".skill-meter");
        skillMeters.toggleClass("animateMeter")
        skillMeters.each(function (index, value) {
            let element = $(this);
            element.addClass("animateMeter");
            setTimeout(function () {
                element.removeClass("animateMeter")
            }, 2500);
        })
    }

    function progressPercentage() {
        let meters = $(".skill-meter");
        meters.each(function () {
            let skillPercentage = $(this).next();
            $({Counter: 0}).animate({Counter: parseInt(skillPercentage.text())}, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    skillPercentage.text(Math.ceil(this.Counter) + "%");
                }
            });
        });
    }

// TOOLS SECTION
    $("#tool-header").click(function () {
        let toolCatalog = $("#tool-catalog");
        if (toolCatalog.css("display") === "none") {
            setTimeout(function () { // accounts for expansion load time to avoid "animation lag" on first tool-item
                animationToolFunc();
            }, 400); // timeout equals collapseExpand().duration
        } else {
            clearInterval(toolAnimationID);
        }
        collapseExpand(toolCatalog);
        collapseExpandIndicator($(this));
    })
// --- animations ---
    let toolAnimationID; // holds intervalID found in animationToolFunc()

    function animationToolFunc() { // animation function with inner-scope interval settings
        animateTools();
        toolAnimationID = setInterval(function () { // returns intervalID
            animateTools();
        }, 5000);

        $(".tool-item").hover(function () { // w/o this .tool-item:hover css effect would conflict
            clearInterval(toolAnimationID);
        }, function () {
            toolAnimationID = setInterval(function () {
                animateTools();
            }, 5000);
        });

    }

    function animateTools() { // individual tool animation function
        let tools = $(".tool-item");

        tools.each(function (index, value) {
            let element = $(this);
            setTimeout(function () { // Awesome visual wave-effect occurrence
                element.addClass("animateTool")
            }, 250 * index);
            setTimeout(function () { // Awesome code wave-effect occurrence
                element.removeClass("animateTool")
            }, 1000 + (index * 250));
        })
        // console.log("hello");
    }
})();
