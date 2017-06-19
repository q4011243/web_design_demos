//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation
$(function(){
  $select = $('<select></select>');
  $button = $('<button>Go</button>');

  // 根据导航增加options
  $('#menu a').each(function(index, el) {
    var $option = $('<option></option>');
    $option.text($(this).parent('li').text()).val($(this).attr('href'));
    $option.appendTo($select);

    //设置正确的option选中
    if($(this).parent().hasClass('selected')){
      $option.prop('selected', 'true');
    }
  });

  // 添加select
  $('#menu').append($select).append($button);

  // button事件
  $select.change(function(event) {
    window.location =  $select.val();
  });
});
