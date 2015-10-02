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

  $('#sidebar-first ul').each(function() {
    if (parseInt($(window).width()) < 420) {
      var select = $(document.createElement('select')).insertBefore($(this).hide());
      $('>li a', this).each(function() {
          var a = $(this).click(function() {
              if ($(this).attr('target')==='_blank') {
                  window.open(this.href);
              }
              else {
                  window.location.href = this.href;
              }
          }),
          option = $(document.createElement('option')).appendTo(select).val(this.href).html($(this).html()).click(function() {
              a.click();
          });
      });
    }
  });

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
