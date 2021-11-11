//resizes boxes to squares on home page

$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
    var div = $('.dynamicheight');
    var width = div.width();
    
    div.css('height', width);
}


const updateHeight() => {

    let div = $('.dynamicheight');
    let width = div.width();
    
    return div.css('height', width);
}

export { updateHeight }



const bro = (greeting) => {
    return '${greeting}, bro'
}

export { bro }