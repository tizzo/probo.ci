//= require modernizr
//= require ga
//= require throttle
//= require jquery-2.1.3.min
//= require jquery.easymodal
//= require jquery.slimmenu.min.js
//= require jquery.sidr.min.js
//= require fullScreenSlides

(function (Probo, $) {
  // prepare the modal for use
  $('#mc_embed_signup').easyModal();

  if (parseInt($(window).width()) < 420) {
    makeSelectLists();
  }

  $(window).on('resize', throttle(function() {
    if (parseInt($(window).width()) < 420) {
      makeSelectLists();
    }
  }));

  function makeSelectLists() {
    $('#sidebar-first').each(function () {
      var select = $('<select/>');
      var lists = $(this).find('ul');
      lists.each(function () {
        var title = $(this).prev('h4');
        $(title).hide();
        if (title.length) {
          var optgroup = $('<optgroup/>').attr('label', $(title).find('a').html()).appendTo(select);
          $(this).find('li').each(function (i) {
            var option = $('<option/>').appendTo(optgroup).val(window.location.origin + $(this).find('a').attr('href')).html($(this).find('a').html());
          });
        } else {
          $(this).find('li').each(function (i) {
            var option = $('<option/>').appendTo(optgroup).val(window.location.origin + $(this).find('a').attr('href')).html($(this).find('a').html());
          });
        }
        $(this).hide();
      });
      select.appendTo($(this));
      select.on('change', function () {
        window.location = $(this).val();
      });
    });
  }

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
