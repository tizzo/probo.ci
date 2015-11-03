//= require modernizr
//= require ga
//= require throttle
//= require jquery-2.1.3.min
//= require jquery.easymodal
//= require jquery.slimmenu.min.js
//= require jquery.sidr.min.js
//= require jquery.fitvids.js
//= require tinynav.js
//= require zendesk.js

(function (window, $) {

  // prepare the modal for use
  $('#mc_embed_signup').easyModal();

  // use tinynav
  $("#sidebar-first ul").tinyNav();

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

  //click for modal
  $('.request').click(function(e) {
    $('#mc_embed_signup').trigger('openModal');
    e.preventDefault();
  });

  $('.close-request').click(function(e) {
    $('#mc_embed_signup').trigger('closeModal');
    e.preventDefault();
  });

  $(window).on("resize", function(event){
    if($('body').hasClass('sidr-open') && $(window).width() >= 768) {
      $.sidr('close');
    }
  });

  // Setting up FitVids for responsive iFrames embeds (videos)
  $('.video-container').fitVids();

})(window || {}, jQuery);
