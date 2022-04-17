const nameElement = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const buttonElement = document.getElementById('submit-btn')
const nameSmall = document.getElementById('name-small')

const entireForm = document.querySelector('form')


entireForm.addEventListener('submit', submitForm)

// any function inside addEventListener gets a paraments which is an event usually written as "e"

// buttonElement.addEventListener('click', buttonClick)

function buttonClick(){
    console.log("button is clicked")
}

// nameElement.value - gives me the value inside the input element

function submitForm(virat){
    virat.preventDefault()

    if(nameElement.value === "" || nameElement.value.includes("Dinil") !== true){
        console.log("Name is Empty")
        nameElement.classList = "error"
        nameSmall.classList = "display"
    }else{
        nameElement.classList = "success"
    }

    if(email.value === ""){
        console.log("email is Empty")
        email.classList = "error"
    } // add else conditions

    if(password.value === "" || password.value.includes("@", "#", "$") === false){
        console.log("password is Empty")
        password.classList = "error"
        nameSmall.classList = "display"
    }else{
        nameElement.classList = "success"
    }

    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
    }

}
