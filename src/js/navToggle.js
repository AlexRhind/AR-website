

$(document).ready(function () {

    $('.icon').click(function () {
        console.log('one')
        $('#siteLinks').fadeToggle();
    });
    
    });


    //where resize is a js method

window.addEventListener("resize", function() {

    if (window.matchMedia("(min-width: 702px)").matches) {
        console.log("Screen width is at least 702px")
    } else {
        console.log("Screen less than 702px")
    }
    })

    // $(window).resize(function() {

    //     if (

    //         $(".hidediv").click(function () {
    //             $(".divdemo").hide("slow");
    //            });
        

    //     )
   
    //     $(".showdiv").click(function () {
    //     $(".divdemo").show(2000);
    //    });
   
    //   });