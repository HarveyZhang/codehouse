var j = jQuery.noConflict();
j(document).ready(function () {
    // hover caption effect
    j('a .img-caption').hide();
    j('a').unbind('hover');
    j('a').hover(
      function () {
        j(this).children('.img-caption').fadeIn('slow');
      }, function () {
        j(this).children('.img-caption').fadeOut('slow');
      }
    );
});
