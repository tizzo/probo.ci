//= require modernizr
//= require ga
//= require throttle
//= require jquery-2.1.3.min
//= require jquery.easymodal
//= require fullScreenSlides

(function(Proviso, $) {
  // prepare the modal for use
  $('#mc_embed_signup').easyModal();

  // enable the homepage slides
  if (Proviso.fullScreenSlides && $('.home').length) {
    if (Proviso.fullScreenSlides.settings.slides.length
      && Proviso.fullScreenSlides.settings.nav.length) {
      Proviso.fullScreenSlides.setupSlideToggles();
      Proviso.fullScreenSlides.setupScrollSlides();
    }
  }
})(Proviso || {}, jQuery);