function checkOut(){
    let password = document.getElementById("password")
    let confirmPassword = document.getElementById("confirmPassword")
    if(password.value == confirmPassword.value){
        password.style.border = "1px solid #70ce12"
        confirmPassword.style.border = "1px solid #70ce12"
    }
    else{
        password.style.border = "1px solid #ce0202"
        confirmPassword.style.border = "1px solid #ce0202"
    }
}