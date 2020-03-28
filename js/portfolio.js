"use strict";

$('.read-more-btn').click(function (e) {
    e.preventDefault();

    let extDesc = $(this).parent().children(".p-desc-cont").children().children("span.extended-description");
    extDesc.toggle(); // toggle show/hide methods

    if (extDesc.is(':visible')) { // if toggled to show -> then execute
        $(this).text("Show Less");
        $(this).css({'border-color':'red', 'background-color':'rgba(58, 62, 72, .7)'});

    } else { // if toggled to hide -> then execute
        $(this).text("Read More");
        $(this).css({'border-color':'#04C2C9', 'background-color':'rgba(58, 62, 72, 1)'});
        // Scrolling destinations
        let pImage = $(this).parent().children(".p-image");
        let imagePosition = pImage.offset().top + (-51 - 16); // (-51 accounts for 48px nav height + 3px bottom border) (-16 accounts for padding above)

        let pContainer = $(this).parent().parent();
        let containerPosition = pContainer.offset().top + (-51);

        let pContent = $(this).parent();
        let contentPosition = pContent.offset().top + (-51);

        $('html, body').animate({
            scrollTop: containerPosition
        },550);
    }

});
