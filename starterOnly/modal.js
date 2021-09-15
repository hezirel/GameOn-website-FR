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
const firstInput = document.getElementById("first")
const lastInput = document.getElementById("last")
const emailInput = document.getElementById("email")
const birthInput = document.getElementById("birthdate")

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

firstInput.addEventListener("focusout", function (e) {
  if (firstInput.value.length < 2) {
    document.getElementById("nameHint").style.display = "inline"
    firstInput.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  firstInput.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("nameHint").style.display = "none"
});

lastInput.addEventListener("focusout", function (e) {
  if (lastInput.value.length < 2) {
    document.getElementById("lastHint").style.display = "inline"
    lastInput.parentElement.setAttribukkte('data-error-visible', 'true');
    return false;
  }
  lastInput.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("lastHint").style.display = "none"
});

emailInput.addEventListener('focusout', function (e) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(emailInput.value.trim().match(re))) {
    emailInput.parentElement.setAttribute('data-error-visible', 'true');
    document.getElementById("emailHint").style.display = "block"
    return (false);
  }
  emailInput.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("emailHint").style.display = "none"
})

birthInput.addEventListener("focusout", function (e) {
  if (!(birthInput.value)) {
    document.getElementById("birthHint").style.display = "inline"
    birthInput.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  birthInput.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("birthHint").style.display = "none"
});
