"use strict";

$('.read-more-btn').click(function (e) {
    e.preventDefault();

    let extDesc = $(this).parent().children(".p-desc-cont").children().children("span.extended-description");
    let displayState = extDesc.css('display');
    let thisBtn = $(this);

    extDesc.slideToggle({ //jQuery slideToggle options
        duration: 'slow',
        start: function(){ // do something when animation begins
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
