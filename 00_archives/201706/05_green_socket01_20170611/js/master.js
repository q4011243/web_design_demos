
$(function(){
  var cycle = $(".fa-motorcycle");

  TweenLite.to(cycle, 3, {
    x: "600px",
    ease: Power2.easeOut
  });

  TweenLite.from(cycle, 2, {
    rotation: -45,
    transformOrigin: "10px bottom",
    ease: Bounce.easeOut,
    opacity: 0
  });
});
