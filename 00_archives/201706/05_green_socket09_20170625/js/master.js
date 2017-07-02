$(function() {
  "use strict";
  const $dots = $("#dots circle"),
        $logo = $('#logo').drawsvg({
          duration:1000,
          callback:function() {
            TweenMax.to("#company",2,{opacity:1});
          }
        });

  $dots.each(function(index, el) {
    let xPos = Math.random() * 500 -250,
        yPos = Math.random() * 500 -250,
        opacityVal = Math.random(),
        randomDelay = Math.random() * 2;

    TweenMax.set(el,{
      x:xPos,
      y:yPos,
      opacity:opacityVal
    });

    TweenMax.to(el,1,{
      x:0,
      y:0,
      delay: randomDelay,
      ease: Power3.easeInOut
    });
  });

  $logo.drawsvg('animate');

});
