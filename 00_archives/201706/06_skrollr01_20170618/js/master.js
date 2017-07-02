$(function() {
  var s = skrollr.init();
  var $root = $("html,body");
  var positions = [0,1000,2000,3500];
  var currentPosition = 0;

  $(".btn-next").click(function(e) {
    e.preventDefault();
    currentPosition = getCurrentPosition($(document).scrollTop(),positions);
    /* Act on the event */
    if(currentPosition < positions.length - 1){
      currentPosition++;
    }else if($(document).scrollTop() === positions[positions.length - 1]){
      return;
    }

    $root.animate({
      scrollTop: positions[currentPosition]
    }, 1000);
  });

  $(".btn-previous").click(function(e) {
    e.preventDefault();
    currentPosition = getCurrentPosition($(document).scrollTop(),positions);
    /* Act on the event */
    if(currentPosition > 0){
      currentPosition--;
    }else if($(document).scrollTop() === positions[0]){
      return;
    }

    $root.animate({
      scrollTop: positions[currentPosition]
    }, 1000);
  });
});

// 定位当前的帧位置
function getCurrentPosition(scrollPosition,positions){
  for (var i = 0; i < positions.length - 1; i++) {
    if(scrollPosition >= positions[i] && scrollPosition < positions[i + 1]) return i;
  }
  return positions.length - 1;
}
