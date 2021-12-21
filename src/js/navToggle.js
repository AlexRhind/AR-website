

// NavMenuOne - Mobile styling - MAX of 702px wide
const mediaQueryOne = window.matchMedia('max-width: 702px')

// NavMenuTwo - Desktop styling - MIN of 703px wide
const mediaQueryTwo = window.matchMedia('min-width: 703px')


// Mobile menu 
function NavMenuOne(e) {

    if (e.matches) {

        console.log('MQOne Mobile max-width: 702px')

        // ensure mobile nav is hidden on loading the page
        $('#siteLinks').css('display','none !important');

        $('#menuIcon').click(function () {

            $('#siteLinks').fadeToggle();
        })
    }
}

// Desktop menu 
function NavMenuTwo(e) {

    if (e.matches) {

        console.log('MQTwo Desktop min-width: 703px')

        // ensure the desktop nav is shown on loading the page
        $('#siteLinks').css('display','block !important');

    }
}


// Initial check - fire the function and pass the variable
NavMenuOne(mediaQueryOne)

NavMenuTwo(mediaQueryTwo)


// Register an on-change event listener for the mobile menu
mediaQueryOne.addEventListener('change', NavMenuOne)

mediaQueryTwo.addEventListener('change', NavMenuTwo)
