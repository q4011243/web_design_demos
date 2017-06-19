// 点击换颜色
$(function() {
  var color =  $('.selected').css('background-color');
  var $canvas =  $('canvas');
  var context = $canvas[0].getContext('2d');
  var lastEvent;
  var mousedown = false;

  $('.controls').on('click','li',function(event) {
    $(this).addClass('selected').siblings().removeClass('selected');

    color = $(this).css('background-color');
  });

  // 展开新颜色面板
  $('#revealColorSelect').click(function(event) {
    colorChange();
    $('#colorSelect').toggle();
  });

  // 颜色条变化
  function colorChange(){
    // console.log('123');
    var r = $('#red').val();
    var g = $('#green').val();
    var b = $('#blue').val();
    color = 'rgb('+ r +', '+ g + ',' + b +')';
    $('#newColor').css('background-color',color);
  }

  $('input[type="range"]').change(colorChange);

  // 添加新颜色，动态注册事件
  $('#addNewColor').click(function(event) {
    var $li = $('<li></li>');
    $li.css('background-color',color).appendTo('.controls ul');
    // 模拟点击事件
    $li.click();
  });

  // 开始画画
  $canvas.mousedown(function(event) {
    // console.log('222');
    lastEvent = event;
    mousedown = true;
  }).mousemove(function(event) {
    if(mousedown){
      context.beginPath();
      context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
      context.strokeStyle = color;
      context.lineTo(event.offsetX,event.offsetY);
      context.stroke();
      lastEvent = event;
    }
  }).mouseup(function(event) {
    mousedown = false;
  });;
});


$.ajax({
  url: '/path/to/file',
  type: 'default GET (Other values: POST)',
  dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
  data: {param1: 'value1'}
})
.done(function() {
  console.log("success");
})
.fail(function() {
  console.log("error");
})
.always(function() {
  console.log("complete");
});
