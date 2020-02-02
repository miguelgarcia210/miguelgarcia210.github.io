"use strict";

$(document).ready(function () {
    // MOBILE MENU FUNCTIONALITY
    let mobileMenu = $('.m-menu');
    mobileMenu.click(function(e) {
        e.preventDefault();

        // assigned a variable to a function returning a non-static jQuery selection
        let dNav = function() {
            return $('.d-nav-list');
        };

        let header = $('header');

        header.toggleClass('active');
        dNav().slideToggle(500, "linear").css("display", "flex");

    });
});
// }) ();
