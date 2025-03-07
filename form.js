const form = document.querySelector("#template-form");
const emailInput = document.querySelector("#form-email");
const countrySelect = document.querySelector("#form-country");
const postalCode = document.querySelector("#form-postal-code");
const passwordEnter = document.querySelector("#form-password");
const passwordConfirm = document.querySelector('#form-password-confirm');
const emailError = document.querySelector("#form-email + span.error");
const countryError = document.querySelector("#form-country + span.error");
const postalCodeError = document.querySelector("#form-postal-code + span.error");
const passwordError = document.querySelector("#form-password + span.error");
const passwordConfirmError = document.querySelector("#form-password-confirm + span.error");


//EMAIL validation

emailInput.addEventListener("input", () => {
    if(emailInput.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showEmailError();
    }
})

//COUNTRY validation

countrySelect.addEventListener("input", () => {
    if(countrySelect.validity.valid) {
        //if country select is valid, error text is nothing. 
        countryError.textContent = "";
        countryError.className = "error";
    } else {
        showCountryError();
    }
})

//POSTAL CODE validation

postalCode.addEventListener("input", () => {
    if(postalCode.validity.valid) {
        //if country select is valid, error text is nothing. 
        postalCode.textContent = "";
        postalCodeError.className = "error";
    } else {
        showPostalCodeError();
    }
})

//PASSWORD validation

passwordEnter.addEventListener("input", () => {
    if(passwordEnter.validity.valid) {
        //if country select is valid, error text is nothing. 
        passwordEnter.textContent = "";
        passwordError.className = "error";
    } else {
        showPasswordError();
    }
})

//PASSWORD CONFIRM validation

passwordConfirm.addEventListener("input", () => {
    if(passwordConfirm.value == passwordEnter.value) {
        //if country select is valid, error text is nothing. 
        passwordConfirm.textContent = "";
        passwordConfirmError.className = "error";
    } else {
        showPasswordConfirmError();
    }
})

//FORM validation

form.addEventListener("submit", (event) =>{
    if((!emailInput.validity.valid)) {
        // if the validity is now valid, show the error and prevent form from submit
        showEmailError();
        event.preventDefault();
    }
})

form.addEventListener("submit", (event) =>{
    if((!countrySelect.validity.valid)) {
        // if the validity is now valid, show the error and prevent form from submit
        showCountryError();
        event.preventDefault();
    }
})

form.addEventListener("submit", (event) =>{
    if((!postalCode.validity.valid)) {
        // if the validity is now valid, show the error and prevent form from submit
        showPostalCodeError();
        event.preventDefault();
    }
})

form.addEventListener("submit", (event) =>{
    if((!passwordEnter.validity.valid)) {
        // if the validity is now valid, show the error and prevent form from submit
        showPasswordError();
        event.preventDefault();
    }
})

form.addEventListener("submit", (event) =>{
    if((passwordConfirm.value != passwordEnter.value)) {
        // if the validity is now valid, show the error and prevent form from submit
        showPasswordConfirmError();
        event.preventDefault();
    } else if ((!passwordEnter.validity.valid)) {
        showPasswordConfirmError();
        event.preventDefault();
    }
})

//SHOW ERROR functions

function showEmailError() {
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

function showCountryError () {
    if (countrySelect.validity.valueMissing) {
        countryError.textContent = "You need to enter a country."
    } else if (countrySelect.validity.tooShort) {
        countryError.textContent = `Country should be at least ${countrySelect.minLength} characters; you entered ${countrySelect.value.length}.`
    } 

    countryError.className = "error active";
}

function showPostalCodeError () {
    if (postalCode.validity.valueMissing) {
        postalCodeError.textContent = "You need to enter a Zip Code."
    } else if (postalCode.validity.patternMismatch) {
        postalCodeError.textContent = "Please enter a valid zip code."
    }

    postalCodeError.className = "error active";
}

function showPasswordError () {
    if (passwordEnter.validity.valueMissing) {
        passwordError.textContent = "You need to enter a password."
    } else if (passwordEnter.validity.patternMismatch) {
        passwordError.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
    }

    passwordError.className = "error active";
}

function showPasswordConfirmError () {
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = "You need to confirm your password."
    } else if (passwordConfirm.value != passwordEnter.value) {
        passwordConfirmError.textContent = "Passwords need to match."
    }

    passwordConfirmError.className = "error active";
}