//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
$(function() {
  var $overlay = $('<div id="overlay"></div>');
  var $img = $('<img>');
  var $caption = $('<p></p>');

  $overlay.append($img);
  $overlay.append($caption);
  $("body").append($overlay);


  $("#image-gallary a").click(function() {
    event.preventDefault();
    $img.attr('src',$(this).attr('href'));
    $caption.text($(this).children('img').attr('alt'));

    $overlay.show();
  });

  $overlay.click(function(event) {
    $(this).hide();
  });
});
