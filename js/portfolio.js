"use strict";

$('.read-more-btn').click(function (event) {
    event.preventDefault();
    // $(this).prev().children().children("span").toggle();
    $(this).prev().children("span").toggle();
    console.log($(this).prev().children().children("span"));
});
