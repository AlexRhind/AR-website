

var btn = $('#button');

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  // preventdefault() stops the btn being clickable
  e.preventDefault();
  //and instead makes it scroll
  $('html, body').animate({scrollTop:0}, '300');
});

