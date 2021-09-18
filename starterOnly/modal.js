function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const submitBtn = document.querySelector(".btn-submit")
const formData = document.querySelectorAll(".formData")
const closeModal = document.querySelectorAll(".close")
const firstInput = document.getElementById("first")
const lastInput = document.getElementById("last")
const emailInput = document.getElementById("email")
const birthInput = document.getElementById("birthdate")
let minAge = 18
const quantityInput = document.getElementById("quantity")
//const radioInput = document.getElementsByName('location')
//const radioField = document.getElementById("locationsRadio")
const checkboxInput = document.getElementById("checkbox1")
//const optCheckboxInput = document.getElementById("checkbox2")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", toggleModal));
// close event
closeModal.forEach((btn) => btn.addEventListener("click", toggleModal));
//submitModal.forEach((btn) => btn.addEventListener("click", toggleModal));

// launch modal form
function toggleModal() {
  // Explain conditon bolean
  modalbg.style.display = modalbg.style.display === 'block' ? '' : 'block';
}


//submit conditions check before submit
function validate() {
  return true;
}

//hide modal form on .close .btn press (!(launchModal))
/*function hideModal() {
  modalbg.removeAttribute("style");
  modalbg.style.display = "";
}*/

firstInput.addEventListener("focusout", function (e) {
  var re = /^[A-Za-z]{2,20}$/
  //if ((firstInput.value.length < 2 || firstInput.value.length > 20) || (!(firstInput.value.trim().match(re)))) {
  if (!(e.target.value.trim().match(re))) {
    document.getElementById("nameHint").style.display = "inline"
    e.target.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  e.target.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("nameHint").style.display = "none"
  return true;
});

lastInput.addEventListener("focusout", function (e) {
  var re = /^[A-Za-z]{2,20}$/
  if (!(e.target.value.trim().match(re))) {
    document.getElementById("lastHint").style.display = "inline"
    e.target.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  e.target.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("lastHint").style.display = "none"
  return true;
});

//Talk about others events possible
emailInput.addEventListener('focusout', function (e) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(e.target.value.trim().match(re))) {
    e.target.parentElement.setAttribute('data-error-visible', 'true');
    document.getElementById("emailHint").style.display = "block"
    return false;
  }
  e.target.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("emailHint").style.display = "none"
  return true;
})

function birthValid(e) {
  //Check if +13 from $today && not born in the future
  //  if(e.match)
  return true;
}

birthInput.addEventListener("focusout", function (e) {
  if (!(birthValid(e.target.value))) {
    document.getElementById("birthHint").style.display = "inline"
    e.target.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  e.target.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("birthHint").style.display = "none"
  return false;
});

quantityInput.addEventListener("focusout", function (e) {
  const re = /^([0-9](?:[0-9])?)$/;
  if (!(e.target.value.match(re))) {
    document.getElementById("quantityHint").style.display = "inline"
    e.target.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  e.target.parentElement.setAttribute('data-error-visible', 'false');
  document.getElementById("quantityHint").style.display = "none"
  return true;
});

//Change event listener for something else on which location verif is triggered
/* radioField.addEventListener('focusout', function (e) {
  for (var i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      quantityInput.parentElement.setAttribute('data-error-visible', 'false');
      document.getElementById("locationHint").style.display = "none"
      return true;
    }
    document.getElementById("locationHint").style.display = "inline"
    return false;
  }
});
 */

checkboxInput.addEventListener('change', function (e) {
  if (!(e.target.checked)) {
    e.target.parentElement.setAttribute('data-error-visible', 'true');
    document.getElementById("checkboxHint").innerText = "Vous devez accepter les termes et conditions d'utilisation";
    return false;
  }
  document.getElementById("checkboxHint").innerText = "";
  return true;
});
