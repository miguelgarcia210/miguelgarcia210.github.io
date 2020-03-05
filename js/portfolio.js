"use strict";

$('.read-more-btn').click(function (e) {
    e.preventDefault();

    let extDesc = $(this).parent().children(".p-desc-cont").children().children("span.extended-description");
    extDesc.toggle();

    if (extDesc.is(':visible')) {
        $(this).text("Show Less");
    } else {
        $(this).text("Read More");
    }

});
