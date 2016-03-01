// Definitions
var slideshow = {
  fadeDuration: 800,
  interval: 3000
}
// Slideshow functions
var initSlideshow = function() {
  $.each($('section.slideshow div.slideshow-item'), function(i) {
    $('section.slideshow div.slideshow-item')
      .eq(i)
      .css('display', 'none');
  });
  $('section.slideshow div.slideshow-item')
    .eq(0)
    .fadeIn(slideshow.fadeDuration);
  modifySlideshowSize();
}
var updateSlideshow = function() {
  setInterval(function() {
    var active = $('section.slideshow div.active');
    var next = active.next().length?
      active.next(): $('section.slideshow div.slideshow-item').eq(0);
    active.fadeOut(slideshow.fadeDuration, function() {
      active.removeClass('active');
    });
    next.fadeIn(slideshow.fadeDuration, function() {
      next.addClass('active');
    });
  }, slideshow.interval);
}
var modifySlideshowSize = function() {
  var height = $('.slideshow-item').height();
  $('section.slideshow').height(height);
}
// Loading
initSlideshow();

// Loaded
$(window).load(function(){
  $('section.slideshow div.active')
    .fadeIn(slideshow.fadeDuration, updateSlideshow());
});

$(window).resize(function() {
  modifySlideshowSize();
});
