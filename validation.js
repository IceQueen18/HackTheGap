const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const lastname_input = document.getElementById('lastname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
   // e.preventDefault() prevent submit

   let errors = []

   if(firstname_input && lastname_input){
        // if we have the first and last nem input then we can signup
        errors = getSignupFormErrors(firstname_input.value, lastname_input.value, email_input.value, password_input.value, repeat_password_input.value )
   }
   else{
    // if we don't have either or one of then we are in the login
        errors = getLoginFormErrors(email_input.value, password_input.value)

   }

   if(errors.length > 0){
        // if there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(". ") // combining mutilple array strings into one string
   }
})


function getSignupFormErrors(firstname, lastname, email, password, repeatpassword){
    let errors = []

    if(firstname === '' || firstname == null){ // if the user didn't add their first name it will notify them
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(lastname === '' || lastname == null){ // if the user didn't add their last name it will notify them
        errors.push('Lastname is required')
        lastname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){ // if the user didn't add their email it will notify them
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){ // if the user didn't add their password it will notify them
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password !== repeatpassword ){ // if the user didn't add their password it will notify them
        errors.push('Password does not match')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}
function getLoginFormErrors(email, password){
    let errors = []

    if(email === '' || email == null){ // if the user didn't add their email it will notify them
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){ // if the user didn't add their password it will notify them
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}
// storing all the inputs
 const allInputs = [firstname_input, lastname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

 allInputs.forEach(input => {
    // going check is it has an incorrect class aka red styling and if that is true then the red class will be removed
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect') 
            error_message.innerText = ''
        }
    })
 })