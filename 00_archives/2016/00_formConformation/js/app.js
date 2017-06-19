//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide hints

//When event happens on password input
  //Find out if password is valid
    //Hide hint if valid
    //else show hint

//When event happens on confirmation input
  //Find out if password and confirmation match
    //Hide hint if match
    //else show hint
$isPass = false;
$isConfirmPass = false;

function canSubmit() {
  return $isPass && $isConfirmPass;
}

function enableSubmit(){
  if (canSubmit()) {
    $('#submit-btn').prop('disabled',false);
  } else {
    $('#submit-btn').prop('disabled',true);
  }
}

$(function() {
  function passwordEvent(event){
    if ($(this).val().length > 8) {
      $(this).next().hide();
      $isPass = true;
    } else {
      $(this).next().show();
      $isPass = false;
    }
    enableSubmit();
  }

  function passwordConfirmEvent() {
    if ($(this).val()=== $('#password').val()) {
      $(this).next().hide();
      $isConfirmPass = true;
    } else {
      $(this).next().show();
      $isConfirmPass = false;
    }
    enableSubmit();
  }
  $('form span').hide();

  $('#password').focus(passwordEvent).keyup(passwordEvent);
  $('#confirm_password').focus(passwordConfirmEvent).keyup(passwordConfirmEvent);

  enableSubmit();
});
