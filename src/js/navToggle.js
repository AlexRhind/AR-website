

// NavMenuMobile - Mobile styling - MAX of 702px wide
const MediaQueryMobile = window.matchMedia('max-width: 702px')

// NavMenuDesktop - Desktop styling - MIN of 703px wide
const MediaQueryDesktop = window.matchMedia('min-width: 703px')


// Mobile menu 
function NavMenuMobile(e) {

    if (e.matches) {

        console.log('MQOne Mobile max-width: 702px')

        // ensure mobile nav is hidden on loading the page
        $('#siteLinks').css('display','none');

        $('#menuIcon').click(function () {

            $('#siteLinks').fadeToggle();
        })
    }
}

// Desktop menu 
function NavMenuDesktop(e) {

    if (e.matches) {

        console.log('MQTwo Desktop min-width: 703px')

        // ensure the desktop nav is shown on loading the page
        $('#siteLinks').css('display','block');

    }
}


// Initial check - fire the function and pass the variable
NavMenuMobile(MediaQueryMobile)

NavMenuDesktop(MediaQueryDesktop)


// Register an on-change event listener for the mobile menu
MediaQueryMobile.addEventListener('change', NavMenuMobile)

MediaQueryDesktop.addEventListener('change', NavMenuDesktop)
