//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $username = $("#username");
var $phone = $("#phone");
var $email = $("#email");
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isUsernameValid() {
  return $username.val().length > 6;
}

function isPhoneValid() {
  var validationPhone = /(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/;
  if(($phone.val().match(validationPhone))){
    return true;
  }
  else{
    return false;
  }
}

function isEmailValid() {
  var validationEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if($email.val().match(validationEmail)){
    return true;
  }
  else{
    return false;
  }
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  if(isUsernameValid() == true 
  && isPhoneValid() == true
  && isPasswordValid() == true
  && arePasswordsMatching() == true){
    return true;
  }
  else
  {
    return false;
    // alert("Please fill all fields...!!!!!!");
  }
}

function usernameEvent(){
  //Find out if username is valid 
  if(isUsernameValid()) {
    //Hide hint if valid
    $username.next().hide();
  } else {
    //else show hint
    $username.next().show();
  }
} 

function phoneEvent(){
  //Find out if phone is valid 
  if(isPhoneValid()) {
    //Hide hint if valid
    $phone.next().hide();
  } else {
    //else show hint
    $phone.next().show();
  }
} 

function emailEvent(){
  //Find out if email is valid 
  if(isEmailValid()) {
    //Hide hint if valid
    $email.next().hide();
  } else {
    //else show hint
    $email.next().show();
  }
} 

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint 
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit()); 
}

//When event happens on username input
$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

//When event happens on phone input
$phone.focus(phoneEvent).keyup(phoneEvent).keyup(enableSubmitEvent);

//When event happens on phone input
$email.focus(emailEvent).keyup(emailEvent).keyup(enableSubmitEvent);


//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();