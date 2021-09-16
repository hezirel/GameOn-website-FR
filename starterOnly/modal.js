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
const quantityInput = document.getElementById("quantity")
const checkboxInput = document.getElementById("checkbox1")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", toggleModal));

closeModal.forEach((btn) => btn.addEventListener("click", toggleModal));

// launch modal form
function toggleModal() {
  // Explain conditon bolean
  modalbg.style.display = modalbg.style.display === 'block' ? '' : 'block';
}

// hide modal form on .close .btn press (!(launchModal))
//function hideModal() {
  //modalbg.removeAttribute("style");
 // modalbg.style.display = "";
//}

firstInput.addEventListener("focusout", function (e) {
  var re = /^[A-Za-z]{2,20}$/
  //if ((firstInput.value.length < 2 || firstInput.value.length > 20) || (!(firstInput.value.trim().match(re)))) {
  if (!(firstInput.value.trim().match(re))) {
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
    lastInput.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  lastInput.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("lastHint").style.display = "none"
});

//Talk about others events possible
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

function birthValid(e) {
  //Check if +13 from $today && not born in the future
//  if(e.match)
}
birthInput.addEventListener("focusout", function (e) {
  if (!(birthValid(birthInput.value))) {
    document.getElementById("birthHint").style.display = "inline"
    birthInput.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  birthInput.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("birthHint").style.display = "none"
});

quantityInput.addEventListener("focusout", function (e) {
  const re = /^([0-9](?:[0-9])?)$/;
  if (!(quantityInput.value.match(re))) {
    document.getElementById("quantityHint").style.display = "inline"
    quantityInput.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  quantityInput.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("quantityHint").style.display = "none"
});

checkboxInput.addEventListener('change', function (e) {
  if (!(checkboxInput.checked)) {
    checkboxInput.parentElement.setAttribute('data-error-visible', 'true');
    document.getElementById("checkboxHint").innerText = "Vous devez accepter les termes et conditions d'utilisation";
    return false;
  } 
    document.getElementById("checkboxHint").innerText = "";
    return true;
});