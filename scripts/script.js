const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const submitBtn = document.querySelector("#submit-btn");
const passwordInput = document.querySelector("#password-input");
const confirm_passwordInput = document.querySelector("#password-confirm-input");
const reset_btn = document.querySelector("#reset-btn");


function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback functions for other input events.
// (lastname, email, password, confirm password)
// validate first name
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// validate last name
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

// validate email
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

// validate password
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

// validate confirm password
confirm_passwordInput.onkeyup = () => {
  confirm_passwordInput.classList.remove("is-valid");
  confirm_passwordInput.classList.remove("is-invalid");
};

// add callback function for Reset button.
reset_btn.onclick = () =>{
  firstNameInput.value = "";
  lastNameInput.value = "";
  passwordInput.value = "";
  confirm_passwordInput.value = "";
  emailInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
  confirm_passwordInput.classList.remove("is-valid");
  confirm_passwordInput.classList.remove("is-invalid");
}

// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;

  if (firstNameInput.value !== "") {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  } else {
    firstNameInput.classList.add("is-invalid");
  }
  if (lastNameInput.value !== "") {
    lastNameInput.classList.add("is-valid");
    isLastNameOK = true;
  } else {
    lastNameInput.classList.add("is-invalid");
  }
  
  if (passwordInput.value.length >= 6){
    passwordInput.classList.add("is-valid"); 
    isPasswordOK = true;
  }
  else{
    passwordInput.classList.add("is-invalid");
  }

  if ((passwordInput.value === confirm_passwordInput.value) && passwordInput.value !== ""){
    confirm_passwordInput.classList.add("is-valid");
    isConfirmPasswordOK = true;
  }
  else{
    confirm_passwordInput.classList.add("is-invalid")
  }

  if(validateEmail(emailInput.value)){
    emailInput.classList.add("is-valid");
    isEmailOK = true;
  }
  else{
    emailInput.classList.add("is-invalid");
  }

  if (isFirstNameOk && isEmailOK && isPasswordOK && isConfirmPasswordOK && isLastNameOK ){
    alert("Registered successfully");
  } 
};