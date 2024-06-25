const form = document.getElementById('form');
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const zipError = document.querySelector("#zip + span.error");
const password = document.getElementById('password');
const passwordError = document.querySelector("#password + span.error");
const confirmPassword = document.getElementById('password-confirm');
const confirmError = document.querySelector("#password-confirm + span.error");
const submit = document.getElementById('submit');

email.addEventListener("input", () => {
    if (email.validity.valid) {
      emailError.textContent = ""; 
    } else {
      showError();
    }
});

zip.addEventListener("input", () => {
    if ((country.value === 'US') && 
    (/\d{5}([ \-]\d{4})?/.test(zip.value) === false)) {
        zipError.textContent = "Please enter a valid US ZIP code.";
    } else if (zip.validity.valid) {
      zipError.textContent = ""; 
    } else {
      showError();
    }
  });

password.addEventListener("input", () => {
    if (password.validity.valid) {
      passwordError.textContent = ""; 
    } else {
      showError();
    }
}); 

confirmPassword.addEventListener("input", () => {
    if(confirmPassword.value !== password.value) {
     confirmError.textContent = 'Passwords must match';
   } else if (confirmPassword.validity.valid) {
     confirmError.textContent = ""; 
   } else {
     showError();
   }
});

submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      showError();
     }  
});  

function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "Please enter an email address.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (zip.validity.valueMissing) {
        zipError.textContent = "Please enter your postal code.";
    } else if (password.validity.valueMissing) {
        passwordError.textContent = "Please enter a password.";
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = "Make sure your password contains uppercase and lowercase letters, a number, and a special character.";
    } else if (confirmPassword.validity.valueMissing) {
        confirmError.textContent = "Please confirm your password.";
    } 
}