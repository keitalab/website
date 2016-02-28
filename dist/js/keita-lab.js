$(window).load(function(){
/*
  var $window = $(window);
  //smooth scroll
  $('li.menu-element>a').smoothScroll();

    /*
  //sticky menu bar
  $("header").each(function(){
    var $menubar = $(this);
    var menubarOffsetTop = $menubar.offset().top;
    $window.on('scroll', function(){
      if($window.scrollTop() > menubarOffsetTop){
        $menubar.removeClass('no-sticky');
        $menubar.addClass('sticky');
      }
      else{
        $menubar.removeClass('sticky');
        $menubar.addClass('no-sticky');
      }
    });
    $window.trigger('scroll');
  });

  // sticky headline
  $(".headword").each(function(){
    var $h_word = $(this);
    var h_wordOffsetTop = $h_word.offset().top;
    $window.on('scroll', function(){
      if($window.scrollTop() > h_wordOffsetTop-500){
        $h_word.removeClass('no-sticky');
        $h_word.addClass('sticky');
      }
      else{
        $h_word.removeClass('sticky');
        $h_word.addClass('no-sticky');
      }
    });
    $window.trigger('scroll');
  });

/*
  // Window resize event
  var onResize = function () {
    if (window.innerWidth < 590) {
      $('#menu').css('height', '120px');
      $('div.menu-element').css('width', '70px');
      $('div.menu-element').css('height', '50px');
      $('div.menu-element>a').css('width', '70px');
      $('div.menu-element>a').css('height', '50px');
      $('div.menu-element>a').css('margin-top', '0px');
      $('div.menu-element>a').css('font-size', '20px');
      $('div.menu-title').css('margin-right', '100%');
    }
    else if (window.innerWidth < 740) {
      $('#menu').css('height', '100px');
      $('div.menu-element').css('width', '70px');
      $('div.menu-element').css('height', '100px');
      $('div.menu-element>a').css('width', '70px');
      $('div.menu-element>a').css('height', '50px');
      $('div.menu-element>a').css('margin-top', '35px');
      $('div.menu-element>a').css('font-size', '20px');
      $('div.menu-title').css('margin-right', '0px');
    }
    else {
      $('#menu').css('height', '100px');
      $('div.menu-element').css('width', '100px');
      $('div.menu-element').css('height', '100px');
      $('div.menu-element>a').css('width', '100px');
      $('div.menu-element>a').css('height', '65px');
      $('div.menu-element>a').css('margin-top', '35px');
      $('div.menu-element>a').css('font-size', '25px');
      $('div.menu-title').css('margin-right', '0');
    }
    $('.filled-video').attr('width', window.innerWidth+"px");
  };
  */
  //onResize();
  //$(window).bind("resize", onResize);

  // swiper
  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        loop: true
    });
});
