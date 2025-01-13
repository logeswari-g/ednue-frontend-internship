function welcome(){
    alert("Hi, Please login to continue");
}

function thanks(){
    alert("Thanks for logging in..")
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

function validatePass(){
    var password = "EdnueTech"
    var passwordInput = document.getElementById("password").value;
    if(passwordInput == password){
        alert("Thanks for Login, have a nice day");
    }else{
        alert('please enter correct password')
    }
}
//let
//const
//var

//regular Expression 