






(function(Probo, $) {
  // prepare the modal for use
  $('#mc_embed_signup').easyModal();

  // enable the homepage slides
  if (Probo.fullScreenSlides && $('.home').length) {
    if (Probo.fullScreenSlides.settings.slides.length
      && Probo.fullScreenSlides.settings.nav.length) {
      Probo.fullScreenSlides.setupSlideToggles();
      Probo.fullScreenSlides.setupScrollSlides();
    }
  }
})(Probo || {}, jQuery);
