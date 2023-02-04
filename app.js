const form = document.querySelector("form"), 
emailField = form.querySelector(".email-field"), 
emailInput = emailField.querySelector(".email"), 
passField = form.querySelector(".create-password")
passInput = passField.querySelector(".password")
cpassField = form.querySelector(".confirm-password")
cpassInput = cpassField.querySelector(".cpassword")


function checkEmail() {
  const patternE = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailInput.value.match(patternE)){
    return emailField.classList.add("invalid")
  }
  emailField.classList.remove("invalid")
}

const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon)=>{
    eyeIcon.addEventListener("click", ()=>{
  const pInput = eyeIcon.parentElement.querySelector("input")
  if(pInput.type === "password"){
    eyeIcon.classList.replace("bx-hide", "bx-show")
    return (pInput.type = "text")
  }
  eyeIcon.classList.replace("bx-show", "bx-hide")
  pInput.type = "password";
});
})


function checkPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  
  if(!passInput.value.match(passPattern)){
    return(passField.classList.add("invalid")) 
  }
  passField.classList.remove("invalid")
}


function confirmPass() {
  if(passInput.value !== cpassInput.value || cpassInput.value === ""){
    return cpassField.classList.add("invalid")
  }
  cpassField.classList.remove("invalid")
}


form.addEventListener("submit", (e)=>{
  e.preventDefault(); 
  checkEmail();
  checkPass();
  confirmPass();

  emailInput.addEventListener("keyup", checkEmail)
  passInput.addEventListener("keyup", checkPass)
  cpassInput.addEventListener("keyup", confirmPass)
  
  
  if (!emailField.classList.contains("invalid") && !passField.classList.contains("invalid") && !cpassField.classList.contains("invalid")) {
    location.href = form.getAttribute("action")
  }
})