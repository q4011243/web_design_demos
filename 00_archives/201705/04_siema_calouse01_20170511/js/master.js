$(function() {
  var slideIndex = 0; // 当前
  const slideNum = 4;   //总共

  const slidershow = new Siema({
    selector: ".slider",
    loop: true,
    draggable: true,
    perPage: 1,
    duration: 2000
  });

  $(".prev").on("click",function(){
    slidershow.prev();
    slideIndex = slideIndex===0?(slideNum-1):(slideIndex-1);
    $(`.btn-nav[data-index=${slideIndex}]`).click();
  });
  $(".next").on("click",function(){
    slidershow.next();
    slideIndex = slideIndex===(slideNum-1)?0:(slideIndex+1);
    $(`.btn-nav[data-index=${slideIndex}]`).click();
  });

  // const timer = setInterval(()=>{slidershow.next()},4000);
  $(".btn-nav").on("click",function(){
    const $this = $(this);
    slideIndex = $this.data("index");
    slidershow.goTo(slideIndex);
    $(".btn-nav").removeClass("active");
    $this.addClass("active");
  });
});
