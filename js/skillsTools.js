(function () { // IIFE for variable/function isolation
    "use strict";

    $(function () {
        clickSaver($("#skills-header"), skillsHeaderClick, 2000); // secures initial click until animation completion
        animationSkillsFunc();
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
        element.off(); // unbind click
        setTimeout(function () {
            element.on('click', bindFunctionName)
        }, delayTime)
    }

    function displayState(element) {
        return element.css("display") === "none";
    }

// LANGUAGE SECTION
    $("#v-lang-header").on('click', langHeaderClick);

    function langHeaderClick(event) {
        event.stopPropagation();
        clickSaver($(this), langHeaderClick, 400) // rebinds 'click' event, 400: slideToggle completionTime
        let table = $("#v-lang-table-container");
        collapseExpand(table);
        collapseExpandIndicator($(this));
    }

// EQUIPMENT SECTION
    $("#equip-header").on('click', equipHeaderClick);

    function equipHeaderClick(event) {
        event.stopPropagation();
        clickSaver($(this), equipHeaderClick, 400) // rebinds 'click' event, 400: slideToggle completionTime
        let table = $("#equip-table");
        collapseExpand(table);
        collapseExpandIndicator($(this));
    }

// SKILLS SECTION
    $("#skills-header").on('click', skillsHeaderClick);

    function skillsHeaderClick(event) {
        event.stopPropagation();
        let skillsBars = $("#skills-bar-container");
        if (displayState(skillsBars)) {
            clickSaver($(this), skillsHeaderClick, 2000); // rebinds 'click' event, 2000: animateMeter completionTime
            animationSkillsFunc();
        } else {
            clickSaver($(this), skillsHeaderClick, 400); // rebinds 'click' event, 400: slideToggle completionTime
        }
        collapseExpand(skillsBars);
        collapseExpandIndicator($(this));
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

    function animationSkillsFunc() {
        animateMeters();
        progressPercentage();
    }

// TOOLS SECTION
    $("#tool-header").on('click', toolHeaderClick);

    function toolHeaderClick(event) {
        event.stopPropagation();
        clickSaver($(this), toolHeaderClick, 400); // rebinds 'click' event, 400: slideToggle completionTime
        let toolCatalog = $("#tool-catalog");
        if (displayState(toolCatalog)) {
            setTimeout(function () { // accounts for expansion load time to avoid "animation lag" on first tool-item
                animationToolFunc();
            }, 400); // timeout equals collapseExpand().duration
        } else {
            clearInterval(toolAnimationID);
        }
        collapseExpand(toolCatalog);
        collapseExpandIndicator($(this));
    }

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
