"use strict";

let projects = $('.p-container');

// ==========   Project read-more-btn *MAGIC*   ==========
$('.read-more-btn').click(function (e) {
    e.preventDefault();

    let extDesc = $(this).parent().children(".p-desc-cont").children().children("span.extended-description");
    let displayState = extDesc.css('display');
    let thisBtn = $(this);

    extDesc.slideToggle({ //jQuery slideToggle options
        duration: 'slow',
        start: function () { // do something when animation begins
            dynamicReadMoreBtn();
            scrollToProjectTopPosition(extDescState());
        },
        easing: 'swing'
    });

    function extDescState() {
        return displayState !== "none" // if visible then ->
    }

    function dynamicReadMoreBtn() {
        if (extDescState()) {
            thisBtn.text("Read More");
            thisBtn.css({'border-color': '#04C2C9', 'background-color': 'rgba(58, 62, 72, 1)'});
        } else {
            thisBtn.text("Show Less");
            thisBtn.css({'border-color': 'red', 'background-color': 'rgba(58, 62, 72, .7)'});
        }
    }

    function scrollToProjectTopPosition(c) { // utilizes the display state of the element before manipulation
        if (c) {
            let pContainer = thisBtn.parent().parent();
            let containerPosition = pContainer.offset().top + (-51);

            $('html, body').animate({
                scrollTop: containerPosition
            }, 550);
        }
    }
});

// ==========   Project images directory & project name   ==========
let projectsArray = [];

function addProject(directoryLocation, projectName) { // easily add directory name & project name
    let project = {
        directory: directoryLocation,
        name: projectName
    };
    projectsArray.push(project);
}
addProject("01_weather_map_api", "weatherMapProject");
addProject("02_movie_project", "movieProject");
addProject("03_texas_adlister", "texasAdlister");
addProject("04_etps", "etps");

// ==========   Project images directory & project name   ==========
function getProjectImages(project) {
    let source = `https://cors-anywhere.herokuapp.com/https://github.com/miguelgarcia210/miguelgarcia210.github.io/tree/master/images/projects/${project.directory}`;
    $.ajax({
        url: source,
        projectName : project.name // pass variable to $.ajax().done()
    })
        .done(onProjectImageSuccess)
        .fail(onProjectImageFail)
        .always(alwaysProjectImage);
}

function onProjectImageSuccess(data, status, jqXhr) {
    let projectImages = [];
    // let projectObj = {};
    // projectObj.images = [];
    // projectObj.projectName = "something";
    // console.log(jqXhr);
    console.log(this.projectName);
    $(data).find("a").attr("href", function (i, val) {
        if (val.match(/\.(jpe?g|png|gif|svg)$/)) {
            let a = val.slice(val.lastIndexOf('/') + 1);
            projectImages.push(a);
        }
    });
    return console.log(projectImages);
}

function onProjectImageFail(jqXhr, status, error) {
    alert(status + ": unable to load project(s) images");
}

function alwaysProjectImage() {
}

getProjectImages();