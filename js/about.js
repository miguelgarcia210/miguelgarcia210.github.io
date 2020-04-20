$('.read-more-btn').click(function (e) {
    e.preventDefault();

    let intro = $(".p-about-desc:first"); // select first paragraph
    let body = $(".p-about-desc:not(:first)"); // select all subsequent paragraphs after first
    let displayState = $(".p-about-desc:eq(1)").css('display'); // css:'display' state
    let thisBtn = $(this);

    body.slideToggle({ //jQuery slideToggle options
        duration: 'slow',
        start: function () { // do something when animation begins
            ellipsisToggle();
            dynamicReadMoreBtn();
            scrollToProjectTopPosition(bodyDescState());
        },
        easing: 'swing'
    });

    function bodyDescState() {
        return displayState !== "none" // if visible then ->
    }

    function ellipsisToggle() {
        if (bodyDescState()) {
            intro.addClass("clamp");
        } else {
            intro.removeClass("clamp");
        }
    }

    function dynamicReadMoreBtn() {
        if (bodyDescState()) {
            thisBtn.text("Read More");
            thisBtn.css({'border-color': '#04C2C9', 'background-color': 'rgba(58, 62, 72, 1)'});
        } else {
            thisBtn.text("Show Less");
            thisBtn.css({'border-color': 'red', 'background-color': 'rgba(58, 62, 72, .7)'});
        }
    }

    function scrollToProjectTopPosition(c) { // utilizes the display state of the element before manipulation
        if (c) {
            let aboutContainer = thisBtn.parent().parent();
            let containerPosition = aboutContainer.offset().top + (-51);

            $('html, body').animate({
                scrollTop: containerPosition
            }, 550);
        }
    }
});

/*
    ===== PROFILE BACKGROUND IMAGE PRELOADER =====
    -> this is done to prevent image from loading incompletely
 */
function preloader() {
    let loadingImage = new Image();
    loadingImage.src = "images/aboutMiguel/backgrounds/rocketBackground.gif";
}

