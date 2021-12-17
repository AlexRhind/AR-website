

// $(document).ready(function () {

//     $('.icon').click(function () {
//         console.log('one')
//         $('#siteLinks').fadeToggle();
//     });
    
//     });

    

    // $(window).resize(function() {

    //     if ($(window).resize == 710) {
    //         console.log("Screen width is at least 710px")

    //     } else {
    //         console.log("Screen less than 710px")
    //     }
    // })

// document.onload = function(){

    window.addEventListener("resize", function() {

        var menu = document.getElementById('siteLinks');
            // console.log("Line 29")

    if (window.matchMedia("(min-width: 702px)").matches) {

            // This is the desktop menu    
            // Ensures the buttons are always visible on desktop
            console.log("IF Screen width => 702px, then desktop");

                if (menu.style.display == 'none') {
                    menu.style.display = 'block';
                }
                else {
                    menu.style.display = 'block';
                }            

    } else {
            // This is the mobile menu
            console.log(" ELSE The Screen is < 702px, so mobile")

            document.getElementById("menuIcon").addEventListener("click", function() {

                "use strict";

                if (menu.style.display !== 'none') {
                    menu.style.display = 'none';
                }
                else {
                    menu.style.display = 'block';
                }
            })

    }
})

