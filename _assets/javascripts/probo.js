//= require modernizr
//= require ga
//= require throttle
//= require jquery-2.1.3.min
//= require jquery.easymodal
//= require jquery.slimmenu.min.js
//= require jquery.sidr.min.js
//= require fullScreenSlides

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

  if ($.fn.sidr instanceof Function) {
    $('#simple-menu').css('display', '').sidr({side: 'left'});
  }

  //fallback for css animation breaking on ios scroll
  var hello = ['Hello', 'Hola', 'Bonjour', 'Bon dia', 'Namaste'];
  var count = 1;
  setInterval(function () {
    $("span.hello").fadeOut(600, function () {
      $(this).html(hello[count]);
      count++;
      if (count == hello.length)
        count = 0;
      $(this).fadeIn(500, function () {
      });
    });
  }, 4000);


})(Probo || {}, jQuery);
