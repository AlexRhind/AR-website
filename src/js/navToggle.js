

// NavMenuMobile - Mobile styling - MAX of 702px wide
const MediaQueryMobile = window.matchMedia('(max-width: 709px)')

// NavMenuDesktop - Desktop styling - MIN of 703px wide
const MediaQueryDesktop = window.matchMedia('(min-width: 710px)')


// Mobile menu 
function NavMenuMobile(e) {

    if (e.matches) {

        console.log('MQOne Mobile max-width: 709px')

        // ensure mobile nav is hidden on loading the page
        let navShow = getComputedStyle(document.documentElement).getPropertyValue('--navShow');

        console.log("Mobile//var --navShow is " + navShow)

        document.documentElement.style.setProperty('--navShow', '0');

        $('#menuIcon').on('click', function () {

            $('#siteLinks').fadeToggle();
        })
    }
}

// Desktop menu 
function NavMenuDesktop(e) {

    if (e.matches) {

        console.log('MQTwo Desktop min-width: 710px')

        // ensure the desktop nav is shown on loading the page
        let navShow = getComputedStyle(document.documentElement).getPropertyValue('--navShow');

        console.log("Desktop//var --navShow is " + navShow)

        document.documentElement.style.setProperty('--navShow', '1');
    }
}


// Initial check - fire the function and pass the variable
NavMenuMobile(MediaQueryMobile)

NavMenuDesktop(MediaQueryDesktop)


// Register an on-change event listener for the mobile menu
MediaQueryMobile.addEventListener('change', NavMenuMobile)

MediaQueryDesktop.addEventListener('change', NavMenuDesktop)
