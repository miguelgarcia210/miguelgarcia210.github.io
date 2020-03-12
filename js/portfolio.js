"use strict";

$('.read-more-btn').click(function (e) {
    e.preventDefault();

    let extDesc = $(this).parent().children(".p-desc-cont").children().children("span.extended-description");
    extDesc.toggle();

    if (extDesc.is(':visible')) {
        $(this).text("Show Less");
        $(this).css({'border-color':'red', 'background-color':'rgba(58, 62, 72, .7)'});

    } else {
        $(this).text("Read More");
        $(this).css({'border-color':'#04C2C9', 'background-color':'rgba(58, 62, 72, 1)'});
    }

});
