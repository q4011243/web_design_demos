$(function() {
  "use strict"
  const $header_title = $('#myModal .modal-title'),
        $modal = $('#myModal'),
        $modal2 = $('#myModal2'),
        $step1Btn = $('button.step1');

  $('#btn01').click(function() {
    $header_title.text('some text');
    $modal.modal({
      backdrop:'static',
      keyboard:false
    });
  });

  $step1Btn.click(function(event) {
    /* Act on the event */
    console.log('test')
    $modal2.modal();
  });
});
