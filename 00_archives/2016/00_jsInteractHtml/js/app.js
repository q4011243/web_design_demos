$(function () {
// 通过按钮增加一个todo
  //  不能和下面两个类别重叠
  var $addButton = $('#new-task').next();
  var $inCompleted = $('#incomplete-tasks');
  var $completed = $('#completed-tasks');

  var addTask = function(){
    // 模板教学
    var $taskLi = $inCompleted.children('li.hidden').clone();
    // console.log($('#new-task').val());
    $taskLi.children('label').text($('#new-task').val());

    $taskLi.removeClass('hidden').appendTo($inCompleted);
  };

  $addButton.click(addTask).click(function(event) {
    $(this).prev().val("");
  });

// 完成/撤销一个todo item
  var completeTask = function(event){
      event.preventDefault();
      $(this).parent().appendTo($completed);
  };
  var cancelTask = function (event) {
    event.preventDefault();
    $(this).parent().appendTo($inCompleted);
  };
  // 动态绑定事件
  $inCompleted.on('change', 'input:checkbox', completeTask);
  $completed.on('change', 'input:checkbox', cancelTask);

// 删除item
  var deleteTask = function() {
    $(this).parent().remove();
  };

  $('.todo-list').on('click','button.delete',deleteTask);

// 编辑/完成编辑item
  var editTask = function() {
    //判断状态
    var isEditMode = $(this).parent().hasClass('editMode');
    if (isEditMode) {
      // 完成编辑
      $(this).siblings('label').text($(this).prev().val());
      $(this).text('edit');
    } else {
      $(this).prev().val($(this).siblings('label').text());
      $(this).text('finish edit');
    }
    $(this).parent().toggleClass('editMode');
    console.log('编辑Item');
  };
  $inCompleted.on('click', 'button.edit', editTask);

  // 测试
  $inCompleted.children('li').each(function(index, el) {
    console.log(index,el);
  });
});
