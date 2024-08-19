let nameInput = document.getElementById('fullName');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
let dobInput = document.getElementById('dob');
let submitBtn = document.querySelector('button[type="submit"]');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);
dobInput.addEventListener('input', validateDOB);

function showErrorMessage(inputElement, message) {
    let errorElement = inputElement.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('p');
        errorElement.classList.add('text-red-500', 'text-sm', 'mt-1', 'error-message');
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    errorElement.textContent = message;
}

function clearErrorMessage(inputElement) {
    let errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = '';
    }
}

function validateName() {
    if (nameInput.value.length < 3) {
        nameInput.classList.add('border-red-500');
        nameInput.classList.remove('border-green-500');
        showErrorMessage(nameInput, 'Name must be at least 3 characters long');
    } else {
        nameInput.classList.remove('border-red-500');
        nameInput.classList.add('border-green-500');
        clearErrorMessage(nameInput);
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('border-red-500');
        emailInput.classList.remove('border-green-500');
        showErrorMessage(emailInput, 'Please enter a valid email address');
    } else {
        emailInput.classList.remove('border-red-500');
        emailInput.classList.add('border-green-500');
        clearErrorMessage(emailInput);
    }
}

function validatePassword() {
    if (passwordInput.value.length < 8) {
        passwordInput.setCustomValidity('Password must be at least 8 characters long');
        passwordInput.classList.add('border-red-500');
        passwordInput.classList.remove('border-green-500');
        showErrorMessage(passwordInput, 'Password must be at least 8 characters long');
    } else if (passwordInput.value.toLowerCase() === passwordInput.value) {
        passwordInput.setCustomValidity('Password must contain at least one uppercase letter');
        passwordInput.classList.add('border-red-500');
        passwordInput.classList.remove('border-green-500');
        showErrorMessage(passwordInput, 'Password must contain at least one uppercase letter');
    } else if (passwordInput.value.toUpperCase() === passwordInput.value) {
        passwordInput.setCustomValidity('Password must contain at least one lowercase letter');
        passwordInput.classList.add('border-red-500');
        passwordInput.classList.remove('border-green-500');
        showErrorMessage(passwordInput, 'Password must contain at least one lowercase letter');
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value)) {
        passwordInput.setCustomValidity('Password must contain at least one special character');
        passwordInput.classList.add('border-red-500');
        passwordInput.classList.remove('border-green-500');
        showErrorMessage(passwordInput, 'Password must contain at least one special character');
    } else {
        passwordInput.setCustomValidity('');
        passwordInput.classList.remove('border-red-500');
        passwordInput.classList.add('border-green-500');
        clearErrorMessage(passwordInput);
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.classList.add('border-red-500');
        confirmPasswordInput.classList.remove('border-green-500');
        showErrorMessage(confirmPasswordInput, 'Passwords do not match');
    } else {
        confirmPasswordInput.classList.remove('border-red-500');
        confirmPasswordInput.classList.add('border-green-500');
        clearErrorMessage(confirmPasswordInput);
    }
}

function validateDOB(){
    let dobDate = new Date(dobInput.value);
    let today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();

    if(!dobInput.value){
        showErrorMessage(dobInput, "Enter your date of birth");
    }
    else if(age < 18){
        showErrorMessage(dobInput, "Must be atleast 18 years old")
    }
    else {
        clearErrorMessage(dobInput)
    }
}