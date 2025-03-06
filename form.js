const form = document.querySelector("#template-form");
const emailInput = document.querySelector("#form-email");
const emailError = document.querySelector("#form-email + span.error");

emailInput.addEventListener("input", () => {
    if(emailInput.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }
})

form.addEventListener("submit", (event) =>{
    if(!emailInput.validity.valid) {
        showError();
        event.preventDefault();
    }
})

function showError() {
    //if you leave it blank
    if (emailInput.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address."
    //if it doesn't match the default email type "aaa@aaa"
    } else if (emailInput.validity.typeMismatch) {
        emailError.textContent = "This needs to be a valid email address."
    //if it doesn't match the minlength that I set
    } else if (emailInput.validity.tooShort) {
        emailError.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`;
    }

    emailError.className = "error active";
}