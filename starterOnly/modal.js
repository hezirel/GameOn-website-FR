function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");
const emailForm = document.querySelectorAll(".email")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.forEach((btn) => btn.addEventListener("click", hideModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide modal form on .close .btn press (!(launchModal))
function hideModal() {
  //modalbg.removeAttribute("style");
  modalbg.style.display = "none";
}

emailForm.addEventListener("change", valEmail());

function valEmail(mail)
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
    return (true)
  }
  document.querySelector("emailHint").setAttribute("display = block")
  return (false)
}

emailForm.addEventListener('change', valEmail(e))