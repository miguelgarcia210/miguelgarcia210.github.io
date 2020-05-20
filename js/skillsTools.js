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

    function disableIndicator(element, delayTime, animationDuration) {
        let indicatorCont = element.find('.exp-coll-butt-cont');
        let indicatorButton = indicatorCont.children();
        indicatorCont.addClass("animateIndicator");
        indicatorButton.addClass("animateIndicatorBack");
        indicatorCont.css("animation-duration", animationDuration);
        indicatorButton.css("animation-duration", animationDuration);
        setTimeout(function () {
            indicatorCont.removeClass("animateIndicator");
            indicatorButton.removeClass("animateIndicatorBack");
            indicatorCont.css("animation-duration", "");
            indicatorButton.css("animation-duration", "");
        }, delayTime)
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

//  MODAL SECTION
    $(".tool-item").on('click', toolItemClick);

    let toolObjects = [
        {
            name: "Adobe Photoshop",
            description: "brief summary about my usage with adobe photoshop",
            image: "images/photoshop-logo.svg"
        },
        {
            name: "IntelliJ IDEA",
            description: "brief summary about my usage with intellij",
            image: "images/intellij-logo.svg"
        },
        {
            name: "GitHub",
            description: "brief summary about my usage with github",
            image: "images/github-logo.svg"
        },
        {
            name: "Git",
            description: "brief summary about my usage with git",
            image: "images/git-logo.svg"
        },
        {
            name: "Sublime Text",
            description: "brief summary about my usage with sublime text",
            image: "images/sublime-text-logo.svg"
        }
        // {
        //     name : "Adobe Photoshop",
        //     description : "brief summary about my usage with adobe photoshop",
        //     image : "images/photoshop-logo.svg"
        // }
    ]

    function toolItemClick(event) {
        event.stopPropagation();
        let modal = $('#modal'); // modal
        let closeBtn = $('#modal-close-button'); // close-button
        let $this = $(this); // tool-item selected
        let title = $this.attr("title"); // selected tool item title
        let tools = $(".tool-item"); // all tool items
        let scrollContainer = $("#scroll-container");

        modal.find('#modal-title').html(title);
        modal.css({
            "display": "flex"
        });
        closeBtn.on('click', function () {
            modal.css("display", "none");
        });

        scrollToTool(tools, title);
        // // Determine index of selected tool item
        // for (let i = 0; i < tools.length; i++) {
        //     let card = $("#content-card-" + i);
        //     // if (selected tool title) equals (tool item at specific index) AND HTML element exists
        //     if (title.toLowerCase() === tools[i].attributes.title.value.toLowerCase() && card.length) {
        //         // scroll to that tool item index
        //         card[0].scrollIntoView({inline: 'center'});
        //         break;
        //     } else if (i === tools.length - 1) {
        //         $("#content-card-0")[0].scrollIntoView({inline: 'center'});
        //     }
        // }

        assignToolIndex(tools);
        // Assigns index to toolObject according to html element order, then manipulate the DOM
        // for (let i = 0; i < tools.length; i++) {
        //     for (let j = 0; j < toolObjects.length; j++) {
        //         if (tools[i].attributes.title.value.toLowerCase() === toolObjects[j].name.toLowerCase()) {
        //             toolObjects[j].index = i;
        //             break;
        //         }
        //     }
        //     if (i === tools.length - 1) {
        //         //     renderToolsDOM(renderToolContent(toolObjects))
        //     }
        // }

        orderSyncVerify(tools);

        // renderToolsDOM(renderToolContent(toolObjects), scrollContainer);
        renderToolsDOM(renderToolContent(toolObjects), scrollContainer);
        // console.log(renderToolContent(toolObjects));
        // // Verifies order relations between toolObjects(JS Object) and tools(HTML ELEMENTS)
        // for (let i = 0; i < tools.length; i++) {
        //     if (tools[i].attributes.title.value.toLowerCase() !== toolObjects[i].name.toLowerCase()) {
        //         // console.log(sortToolObjects());
        //         // console.log("sorted hopefully");
        //         break;
        //     }
        // }
    }

    function scrollToTool(tools, title) {
        // Determine index of selected tool item
        for (let i = 0; i < tools.length; i++) {
            let card = $("#content-card-" + i);
            // if (selected tool title) equals (tool item at specific index) AND HTML element exists
            if (title.toLowerCase() === tools[i].attributes.title.value.toLowerCase() && card.length) {
                // scroll to that tool item index
                card[0].scrollIntoView({inline: 'center'});
                break;
            } else if (i === tools.length - 1) {
                $("#content-card-0")[0].scrollIntoView({inline: 'center'});
            }
        }
    }

    function assignToolIndex(tools) {
        // Assigns index to toolObject according to html element order, then manipulate the DOM
        for (let i = 0; i < tools.length; i++) {
            for (let j = 0; j < toolObjects.length; j++) {
                if (tools[i].attributes.title.value.toLowerCase() === toolObjects[j].name.toLowerCase()) {
                    toolObjects[j].index = i;
                    break;
                }
            }
            if (i === tools.length - 1) {
                //     renderToolsDOM(renderToolContent(toolObjects))
            }
        }
    }

    function orderSyncVerify(tools) {
        // Verifies order relations between toolObjects(JS Object) and tools(HTML ELEMENTS)
        for (let i = 0; i < tools.length; i++) {
            if (tools[i].attributes.title.value.toLowerCase() !== toolObjects[i].name.toLowerCase()) {
                sortToolObjects();
                break;
            }
        }
    }

    function sortToolObjects() {
        let orderedTools = [];
        for (let i = 0; i < toolObjects.length; i++) {
            for (let j = 0; j < toolObjects.length; j++) {
                if (toolObjects[j].index === i) {
                    orderedTools.push(toolObjects[j]);
                }
            }
        }
        //.sort() method
        // return toolObjects.sort(function(a, b) {
        //     return a.index - b.index;
        // });
        // return orderedTools;
        toolObjects = orderedTools;
    }

    function renderToolContent(toolObjs) {
        let content = [];

        $(toolObjs).each(function (index, value) {
            // TODO determine dynamic image and summary placement
            let add = `<div id="content-card-${index}" class="content-card">`;
            add += `<div class="content-header">`;
            add += `<h2 class="content-head-title">${this.name}</h2>`;
            add += `</div>`;
            add += `<div class="content-description">`;
            add += `<img src="${this.image}" alt="${this.name.toLowerCase() + " logo"}" class="content-image">`;
            add += `<p class="content-summary">${this.description}</p>`;
            add += `</div>`;
            add += `</div>`;
            content.push(add);
        });
        return content;
    }

    function renderToolsDOM(toolsArr, element) {
        let str = toolsArr.reduce((accumulation, currentContent) => {
            return accumulation + currentContent;
        }, "");
        element.html(str);
    }

// LANGUAGE SECTION
    $("#v-lang-header").on('click', langHeaderClick);

    function langHeaderClick(event) {
        event.stopPropagation();
        clickSaver($(this), langHeaderClick, 400) // rebinds 'click' event, 400: slideToggle completionTime
        let table = $("#v-lang-table-container");
        collapseExpand(table);
        collapseExpandIndicator($(this));
        disableIndicator($(this), 400, "400ms");
    }

// EQUIPMENT SECTION
    $("#equip-header").on('click', equipHeaderClick);

    function equipHeaderClick(event) {
        event.stopPropagation();
        clickSaver($(this), equipHeaderClick, 400) // rebinds 'click' event, 400: slideToggle completionTime
        let table = $("#equip-table");
        collapseExpand(table);
        collapseExpandIndicator($(this));
        disableIndicator($(this), 400, "400ms");
    }

// SKILLS SECTION
    $("#skills-header").on('click', skillsHeaderClick);

    function skillsHeaderClick(event) {
        event.stopPropagation();
        let skillsBars = $("#skills-bar-container");
        if (displayState(skillsBars)) {
            clickSaver($(this), skillsHeaderClick, 2000); // rebinds 'click' event, 2000: animateMeter completionTime
            disableIndicator($(this), 2000, "2000ms");
            animationSkillsFunc();
        } else {
            clickSaver($(this), skillsHeaderClick, 400); // rebinds 'click' event, 400: slideToggle completionTime
            disableIndicator($(this), 400, "400ms");
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
        disableIndicator($(this), 400, "400ms");
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
