
$(function(){

  $('.nav-link').hover(function() {
    rotationAroundY($(this),'180');
  }, function() {
    rotationAroundY($(this),'0');
  });

  function rotationAroundY(link,roundAmount){
    var $items = link.children();
    var tl = new TimelineMax();
    tl.staggerTo($items,0.5,{
      rotationY:roundAmount
    },0.2);
  }
});
