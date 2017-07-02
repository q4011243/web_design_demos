
$(function(){
  var letters = $('.letter');
  var random200 = function(){
    var shuzi = Math.random() * 200 - 100;
    return shuzi.toString() + 'px';
  };

  // letters.each(function(index, el) {
  //   TweenLite.from($(el),2,{
  //     x:random200(),
  //     y:random200(),
  //     opacity:0
  //   });
  // });

  // TweenMax.staggerFrom(letters,2,{
  //   x:random200(),
  //   y:random200(),
  //   opacity:0,
  //   ease:Bounce.easeOut
  // },0.25);

  var tl = new TimelineMax({repeat:2}),
      icons = $('.icons i');

  tl
  .staggerFrom(letters,1,{
    x:random200(),
    y:random200(),
    opacity:0,
    ease:Elastic.easeOut
  },0.2)
  .staggerFrom(icons,1,{
    scale:2,
    opacity:0
  },0.5,'-=1');
});
