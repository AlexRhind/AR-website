

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

                if (window.matchMedia("(min-width: 702px)").matches) {
                    console.log("Screen width is at least 702px")
                } else {
                    console.log("Screen less than 702px")
                }
            })




        document.getElementById("menuIcon").addEventListener("click", function() {

            "use strict";
            console.log("Line 41")

            var icon = document.getElementById('siteLinks');

            console.log(typeof 'siteLinks')

            // if (icon.style.display !== 'none') {
            if (icon.style.backgroundColor !== 'green') {
                // icon.style.display = 'none';
                icon.style.backgroundColor = 'red';
            }
            else {
                icon.style.display = 'block';
            }
        })

// end document.onload
// };


    //         $(".hidediv").click(function () {
    //             $(".divdemo").hide("slow");
    //            });
    //     )
   
    //     $(".showdiv").click(function () {
    //     $(".divdemo").show(2000);
    //    });
   
    //   });