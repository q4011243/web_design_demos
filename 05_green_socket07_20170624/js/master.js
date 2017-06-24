$(function() {
  var rings = $("g[id^=ring]");

  // 初始化
  rings.each(function(index, el) {
    let degree = Math.round(Math.random() * 300) + 60;
    TweenMax.to(el, 6, {
      rotation:degree,
      transformOrigin: "center center",
      yoyo:true,
      ease:Linear.easeNone
    });
  });


  // 增加悬停事件
  $("#rings").hover(
    function() {
      rings.each(function(index, el) {
        TweenMax.to(el, 3, {
          rotation:0,
          transformOrigin: "center center",
          yoyo:true,
          ease:Elastic.easeOut
        });
      });
    },
    function() {
      rings.each(function(index, el) {
        var degree = Math.round(Math.random() * 300) + 60;
        rotate(el,degree);
      });
    }
  );

  function rotate(ring,degree,duration=6){
    TweenMax.to(ring, duration, {
      rotation:degree,
      transformOrigin: "center center",
      yoyo:true,
      ease:Linear.easeNone
    });
  }

});
