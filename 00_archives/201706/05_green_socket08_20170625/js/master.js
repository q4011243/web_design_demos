$(function() {
  const circles = $(".circle"),
        tl = new TimelineMax(), // preload动画
        tl2 = new TimelineMax(), // prelaod完成动画
        imgUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/valley.jpg?" + Math.random(),
        $img = $("<img>");

  TweenMax.set(circles,{
    opacity:0,
    scale:0
  });

  tl.add(
    TweenMax.staggerTo(circles,1,{
      opacity:1,
      scale:1,
      ease: Power1.easeIn
    },0.2)
  ).add(
    TweenMax.staggerTo(circles,1,{
      scale:1.1,
      boxShadow: "0 20px 22px rgba(0,0,0,.4)",
      ease: Power1.easeOut,
      repeat: -1,
      yoyo:true
    },0.2),"-=0.6"
  );

  // 绑定图片载入事件
    $img.load(afterImgLoad);

    $img.attr('src', imgUrl);

    function afterImgLoad(){
      console.log("图片已加载");
      tl.pause();

      tl2.add(
        TweenMax.staggerTo(".circle:gt(0)",1,{
          opacity:0
        },0.5)
      ).add(
        TweenMax.staggerTo(".circle1",2,{
          scale:1,
          width:"100%",
          height:"100%",
          borderRadius:0,
          margin:0,
          left:0,
          top:0,
          opacity:0
        }),"-=.6"
      ).add(
        TweenMax.staggerTo(".preloader",1,{
          opacity:0,
          onStart:function(){
            $(".img-container").css("background-image",`url(${imgUrl})`)
          }
        }),"-=0.4"
      );
    }

});
