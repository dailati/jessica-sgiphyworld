const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repest-password-input')

form.addEventListener('input', (e) => {
  e.preventDefault()
})

let errors = []

if(firstname_input){
  errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
}else{
  errors = getLoginFormErrors(email_input.value, password_input.value)
}