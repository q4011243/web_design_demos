$(function() {
  "use strict"
  // 初始化参数,每次动画事件会更新必要的位置参数
  let   slides = $(".slide"),
        active = 0,
        prev = slides.length - 1,
        next = 1,
        activePosition = 150,
        spacing = 210;

  // 定义一些位置信息,我们只显示五个么？
  // 整个动画过程中只涉及到四个slide，变化过程中，最重要的事情也就是设置4个slide的位置
  // 最开始的位置以及结束时候的位置
  const position = {
    active: activePosition,
    next: activePosition + spacing,
    prev: activePosition - spacing,
    up: activePosition - spacing * 2,
    down: activePosition + spacing * 2,
  };

  // 初始化位置
  function setupSlides() {
    TweenMax.set(slides,{top:position.down * 1.5});
    TweenMax.set(slides[active],{top:position.active});
    TweenMax.set(slides[prev],{top:position.prev});
    TweenMax.set(slides[next],{top:position.next});
  }

  // 每次点击按钮都需要出现一个新的slide和已有的三个slide完成所有的动画,而这个新出现的slide的位置就有点考究了
  function animateSlides(isNext) {
    // 新来的slide应该放在哪呢
    let newSlidePosition,
        currentSlides;
    console.log(`active:${active} prev:${prev} next:${next}`);
    if(isNext){
      //  设置新slide
      newSlidePosition = (next + 1) % slides.length;
      TweenMax.set(slides[newSlidePosition],{top:position.down});
      currentSlides = [slides[prev],slides[active],slides[next],slides[newSlidePosition]];

      // 开始动画
      // TweenMax.staggerTo(currentSlides,2,{
      //   top: `-=${spacing}`,
      //   ease: Elastic.easeOut
      // },"+=0.3");
      // 更新元素位置信息


    }else {
      newSlidePosition = (prev - 1) < 0?slides.length - 1:(prev - 1);
      TweenMax.set(slides[newSlidePosition],{top:position.up});
      currentSlides = [slides[next],slides[active],slides[prev],slides[newSlidePosition]];

      // 开始动画
      // TweenMax.staggerTo(currentSlides,2,{
      //   top: `+=${spacing}`,
      //   ease: Elastic.easeOut
      // },"+=0.3");


    }

    // 绝对位置定义动画
    for (var i = 0; i < currentSlides.length; i++) {
      let top;
      switch (i) {
        case 0:
          top = isNext?position.up:position.down;
          break;
        case 1:
          top = isNext?position.prev:position.next;
          break;
        case 2:
          top = position.active;
          break;
        case 3:
          top = isNext?position.next:position.prev;
          break;
        default:
          break;
      }

      TweenMax.to(currentSlides[i],2,{
        top: top,
        delay: 0.1 * i,
        ease: Elastic.easeOut
      });
    }

    // 更新元素位置信息
    if (isNext) {
      prev = active;
      active = next;
      next = newSlidePosition;
    } else {
      next = active;
      active = prev;
      prev = newSlidePosition;
    }
  }
  setupSlides();

  $(".next").click(function(event) {
    /* Act on the event */
    animateSlides(true);
  });

  $(".prev").click(function(event) {
    /* Act on the event */
    animateSlides(false);
  });


});
