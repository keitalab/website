// Definitions
var common = {
  fadeInDuration: 800,
  fadeOutDuration: 1000
}
var slideshow = {
  fadeDuration: 800,
  interval: 3000
}
var member = {
  hoverFadeDuration: 500
}
// Loading
var startLoadingSpinner = function() {
	$('section.loader').css('display', 'block').height($(window).height());
	// modifySlideshowSize();
	$('header, section.main, footer').css('display', 'none');
}
var finishLoadingSpinner = function() {
	$('section.loader')
    .css('display', 'none');
	$('section.main, header, footer')
    .fadeIn(common.fadeInDuration);
}
// Slideshow functions
var initSlideshow = function() {
  modifySlideshowSize();
  $.each($('section.slideshow div.slideshow-item'), function(i) {
    $('section.slideshow div.slideshow-item')
      .eq(i)
      .css('display', 'none');
  });
  $('section.slideshow div.slideshow-item')
    .eq(0)
    .css('display', 'block')
    .addClass('active');
}
var updateSlideshow = function() {
  $('section.slideshow div.slideshow-item')
    .eq(0)
    .fadeIn(slideshow.fadeDuration);
  modifySlideshowSize();
  setInterval(function() {
    var active = $('section.slideshow div.active');
    var next = active.next().length?
      active.next(): $('section.slideshow div.slideshow-item').eq(0);
    active.addClass('fading');
    next.addClass('fading');
    active.fadeOut(slideshow.fadeDuration, function() {
      active.removeClass('active');
      active.removeClass('fading');
    });
    next.fadeIn(slideshow.fadeDuration, function() {
      next.addClass('active');
      next.removeClass('fading');
    });
  }, slideshow.interval);
}
var modifySlideshowSize = function() {
  var height = $('.slideshow-item').height();
  $('section.slideshow').height(height);
}


// Main stream
// Loading
initSlideshow();
startLoadingSpinner();

// Loaded
$(window).load(function() {
  $('section.loader')
    .fadeOut(common.fadeOutDuration, function() {
      $('section.main, header, footer')
        .fadeIn(common.fadeInDuration, function() {
          updateSlideshow();
        });
    });
});

// Window Resize
$(window).resize(function() {
  modifySlideshowSize();
});

// Hovered Member Images
$('div.profile-item').hover(function() {
  $(this)
    .find('div.profile-filter')
    .fadeIn(member.hoverFadeDuration);
}, function() {
  $(this)
    .find('div.profile-filter')
    .fadeOut(member.hoverFadeDuration);
});
