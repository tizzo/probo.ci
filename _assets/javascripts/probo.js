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

  // use tinynav
  $("#sidebar-first ul").tinyNav();

  if ($.fn.sidr instanceof Function) {
    $('#simple-menu').css('display', '').sidr({side: 'right'});
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

  $(window).on("resize", function(event){
    if($('body').hasClass('sidr-open') && $(window).width() >= 768) {
      $.sidr('close');
    }
  });

  // Setting up FitVids for responsive iFrames embeds (videos)
  $('.video-container').fitVids();

})(window || {}, jQuery);
