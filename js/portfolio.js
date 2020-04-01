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

// ===============   Project images directory & project name   ===============
let projectsArray = [];

function addProject(directoryLocation, projectName) { // easily add directory name & project name
    let project = {
        directory: directoryLocation,
        name: projectName
    };
    projectsArray.push(project);
}

// TODO: READY TO ADD A NEW PROJECT?
//  Create a new directory under images/projects/ for all your dedicated projects images
//      format (##_new_project_name)
//  Afterwards, simply use the addProject() and input the corresponding parameter information. DONE!
addProject("01_weather_map_api", "weatherMapProject");
addProject("02_movie_project", "movieProject");
addProject("03_texas_adlister", "texasAdlister");
addProject("04_etps", "etps");

// ---------------   AJAX REQUEST   ---------------
function getProjectImages(project) {
    let source = `https://cors-anywhere.herokuapp.com/https://github.com/miguelgarcia210/miguelgarcia210.github.io/tree/master/images/projects/${project.directory}`;
    $.ajax({
        url: source,
        projectName: project.name, // pass variable to $.ajax().done()
        projectDirectory: project.directory
    })
        .done(onProjectImageSuccess)
        .fail(onProjectImageFail)
        .always(alwaysProjectImage);
}

function onProjectImageSuccess(data, status, jqXhr) {
    // create project object to hold project name & project image names
    let projectObj = {};
    projectObj.name = this.projectName; // carries passed variable to this to allow for use at this stage
    projectObj.directory = this.projectDirectory;
    projectObj.images = [];

    /*
    data response, find matching criteria for images. If found slice string after last '/' character to retrieve image name only.
    *these image names are the images located in the dedicated project image directory.
    add names to projectObj.images array for future manipulation
    */
    $(data).find("a").attr("href", function (i, val) {
        if (val.match(/\.(jpe?g|png|gif|svg)$/)) {
            let a = val.slice(val.lastIndexOf('/') + 1);
            projectObj.images.push(a);
        }
    });

    produceImages(projectObj).forEach(function (image, index, array) {
        $("body").append(image);
    })
}

function onProjectImageFail(jqXhr, status, error) {
    alert(status + ": unable to load project(s) images");
}

function alwaysProjectImage() {
}

// ---------------   AJAX REQUEST   ---------------

/*
    renderImage() -> renders string literals (image names) into html elements
    produceImages() -> production line for rendering images & storing into collection
    generatedImages() -> final html img element for all retrieved images
 */
function produceImages(projectObj) {
    let generatedImages = [];

    projectObj.images.forEach(function (name, index, array) {
        generatedImages.push(renderImage(index, name, projectObj.name, projectObj.directory));
    });

    return generatedImages;
}

function renderImage(imageNumb, imageName, projectName, projectDirectory) {
    let content = `<img` + ` `;
    content += `id=${projectName}Img-${imageNumb}` + ` `;
    content += `src=\"images/projects/${projectDirectory}/${imageName}\"` + ` `;
    content += `alt=\"${imageName}` + ` `;
    content += `class=\"project-img\"`;
    content += `>`;

    return content;
}
// TODO : UNCOMMENT BELOW WHEN READY
// projectsArray.forEach(function (project, index, array) {
//     getProjectImages(project);
// });
// ===============   Project images directory & project name   ===============