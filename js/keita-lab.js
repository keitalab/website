// Definitions
var common = {
  fadeInDuration: 300,
  fadeOutDuration: 500,
  breakpoint: 768
}
var slideshow = {
  fadeDuration: 900,
  interval: 3000
}
var hover = {
  FadeDuration: 170
}

// Loading
var startLoadingSpinner = function() {
	$('section.loader').css('display', 'block').height($(window).height());
}

// Slideshow functions
var SlideShow = {
  init: function() {
    this.resize();

    var $slides = $('section.slideshow div.slideshow-item')
    $slides.each(function (i) {
      if (i === 0) {
        $(this).css('display', 'block')
          .addClass('active');
      } else {
        $(this).css('display', 'none');
      }
    })
  },

  update: function() {
    $('section.slideshow div.slideshow-item')
      .eq(0)
      .fadeIn(slideshow.fadeDuration);
    this.resize();

    setInterval(function() {
      var $slides = $('section.slideshow div.slideshow-item');
      var $active = $('section.slideshow div.active');
      var $next = $active.next().length ?
        $active.next() : $slides.eq(0);

      $active.addClass('fading');
      $next.addClass('fading');
      $active.fadeOut(slideshow.fadeDuration, function() {
        $active.removeClass('active');
        $active.removeClass('fading');
      });
      $next.fadeIn(slideshow.fadeDuration, function() {
        $next.addClass('active');
        $next.removeClass('fading');
      });
    }, slideshow.interval);
  },

  resize: function() {
    var $height = $('.slideshow-item').height();
    $('section.slideshow').height($height);
  }
}

// Main stream
// Loading
startLoadingSpinner();

// Loaded
$(window).load(function() {
  $('div.contents').css('display', 'block');
  $.when(SlideShow.init())
    .done(function() {
      $('div.contents').css('display', 'none')
      $('section.loader')
        .fadeOut(common.fadeOutDuration, function() {
          $('div.contents, header, section.top-image, section.main, footer')
            .fadeIn(common.fadeInDuration, function() {
              SlideShow.update();
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
  } else {
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
  SlideShow.resize();
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
