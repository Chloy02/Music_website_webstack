let form = document.querySelector('form');
let nameinput = document.getElementById('fullName');
let emailinput = document.getElementById('email');
let passwordinput = document.getElementById('password');
let confirmpasswordinput = document.getElementById('confirmPassword');
let dobinput = document.getElementById('dob');
let submitbtn = document.querySelector('button[type="submit"]');

form.addEventListener('input', validateForm);
// form.addEventListener('submit', handleSubmit);

function validateName(){
    if(nameinput.value.length < 3){
        nameinput.setCustomValidity('Name must be at least 3 characters long');
    } else {
        nameinput.setCustomValidity('');
    }
}

function validateEmail(){
    if(!emailinput.checkValidity()){
        emailinput.setCustomValidity('Please enter a valid email address');
    } else {
        emailinput.setCustomValidity('');
    }
}

passwordinput.addEventListener('input', validatePassword);

function validatePassword(){
    if(passwordinput.value.length < 8){
        passwordinput.setCustomValidity('Password must be at least 8 characters long');
        passwordinput.classList.add('border-red-500');
        passwordinput.classList.remove('border-green-500');
    }
    else if(passwordinput.value.toLowerCase() === passwordinput.value){
        passwordinput.setCustomValidity('Password must contain at least one uppercase letter');
        passwordinput.classList.add('border-red-500');
        passwordinput.classList.remove('border-green-500');
    }
    else if(passwordinput.value.toUpperCase() === passwordinput.value){
        passwordinput.setCustomValidity('Password must contain at least one lowercase letter');
        passwordinput.classList.add('border-red-500');
        passwordinput.classList.remove('border-green-500');
    }
    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(passwordinput.value)){
        passwordinput.setCustomValidity('Password must contain at least one special character');
        passwordinput.classList.add('border-red-500');
        passwordinput.classList.remove('border-green-500');
    }
    else {
        passwordinput.setCustomValidity("");
        passwordinput.classList.remove('border-red-500');
        passwordinput.classList.add('border-green-500');
    }
}

function validateForm() {
    validateName();
    validateEmail();
    validatePassword();
}
