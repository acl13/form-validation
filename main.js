const form = document.getElementById('form');
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const submit = document.getElementById('submit');

email.addEventListener("input", () => {
    if (email.validity.valid) {
      emailError.textContent = ""; 
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
    } 
}