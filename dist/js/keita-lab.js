// Definitions
var common = {
  fadeInDuration: 800,
  fadeOutDuration: 1000,
  breakpoint: 768
}
var slideshow = {
  fadeDuration: 800,
  interval: 3000
}
var hover = {
  FadeDuration: 500
}
// Loading
var startLoadingSpinner = function() {
	$('section.loader').css('display', 'block').height($(window).height());
	// modifySlideshowSize();

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

var onLoaded = function() {
  $('div.contents').css('display', 'block');
  $.when(initSlideshow()).done($('div.contents').css('display', 'none'));
}

// Main stream
// Loading
startLoadingSpinner();

$(document).ready(function() {

});
// Loaded
$(window).load(function() {

  $.when(onLoaded())
    .done(function() {
      $('section.loader')
        .fadeOut(common.fadeOutDuration, function() {
          $('div.contents, header, section.top-image, section.main, footer')
            .fadeIn(common.fadeInDuration, function() {
              updateSlideshow();
            });
        });
    });
});

// Header
$('.hamburger .hamburger-icon a').click(function() {
  if (!$('.hamburger-icon').hasClass('cross')) {
    $('section.expanded-menu')
      .removeClass('inactive')
      .addClass('active')
      .animate({ height: '1000px' }, 500, function() {
        $('section.top-image, section.main, footer, div>hr')
          .hide();
      });
    $('div.hamburger-icon')
      .addClass('cross');
  }
  else {
    $('section.expanded-menu')
      .animate({ height: 0 }, 500, function() {
        $(this)
          .removeClass('active')
          .addClass('inactive');
      });
    $('div.hamburger-icon')
      .removeClass('cross');
    $('section.top-image, section.main, footer, div>hr')
      .show();
  }
  return false;
});

// Window Resize
$(window).resize(function() {
  modifySlideshowSize();
  modifySlideshowSize();
});

// Hovered Images
$('div.profile-item').hover(function() {
  $(this)
    .find('div.profile-filter')
    .fadeIn(hover.FadeDuration);
}, function() {
  $(this)
    .find('div.profile-filter')
    .fadeOut(hover.FadeDuration);
});

$('div.project-item').hover(function() {
  if ($(window).width() <= common.breakpoint) {
    return;
  }
  $(this)
    .find('div.project-filter')
    .fadeIn(hover.FadeDuration);
}, function() {
  if ($(window).width() <= common.breakpoint) {
    return;
  }
  $(this)
    .find('div.project-filter')
    .fadeOut(hover.FadeDuration);
});
