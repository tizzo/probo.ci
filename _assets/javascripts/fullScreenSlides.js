var Proviso = (function (parent, $) {

  var fullScreenSlides = parent.fullScreenSlides = parent.fullScreenSlides || {};

  fullScreenSlides.settings = $.extend({}, {
    slides: $('.segment.slide'),
    nav: $('.slide-nav a'),
    useModal: true,
    modalSelector: '#mc_embed_signup'
  });

  fullScreenSlides.setActiveNav = function(slide) {
    // remove active class from all the other toggles
    fullScreenSlides.settings.nav.removeClass('active');

    // add an active class to it
    $(fullScreenSlides.settings.nav[slide]).addClass('active');
  };

  fullScreenSlides.scrollToSlide = function(slide) {
    // scroll to slide
    $('html, body').animate({
      scrollTop: $(fullScreenSlides.settings.slides[slide]).offset().top
    }, 1000);
  };

  fullScreenSlides.showModal = function() {
    var shownModal = localStorage.getItem('shownModal');
    if (!shownModal) {

    }
  };

  fullScreenSlides.setupSlideToggles = function() {
    fullScreenSlides.settings.nav.each(function(i) {
      // cache this
      var toggle = $(this);

      // set the click handling
      toggle.on('click', function (e) {
        e.preventDefault();

        // find the slide this link is controlling
        var slide = toggle.attr('data-slide-href');

        // view the slide
        fullScreenSlides.scrollToSlide(slide);

        // set the active slide
        fullScreenSlides.setActiveNav(slide);
      });
    });
  };

  fullScreenSlides.setupScrollSlides = function() {
    $(window).on('touchmove wheel', function(e) {
      e.handled = false;

      if (!e.handled) {
        var min = 1000
          , activeSlide = $('.slide-nav .active').attr('data-slide-href')
          , $inView = $(fullScreenSlides.settings.slides[activeSlide]);

        fullScreenSlides.settings.slides.each(function (k) {
          var $slide = $(fullScreenSlides.settings.slides[k]);
          var position = Math.abs($slide.offset().top - $(window).scrollTop());

          if (position < min) {
            min = position;
            $inView = $slide;
          }
        });

        activeSlide = $inView.attr('data-slide');
        fullScreenSlides.setActiveNav(activeSlide);
        e.handled = true;
      }
    });
  };

  if (fullScreenSlides.settings.slides.length
    && fullScreenSlides.settings.nav.length) {
    fullScreenSlides.setupSlideToggles();
    fullScreenSlides.setupScrollSlides();
  }

  return parent;

})(Proviso || {}, jQuery);