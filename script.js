const signup = document.getElementById("signup");
const login = document.getElementById("login");

window.addEventListener("hashchange" ,function(){
    if(location.hash.slice(1) == "signup"){
        document.querySelector(".box").classList.add("extend");
        signup.classList.add("active");
        login.classList.remove("active");
    }
    else{
        document.querySelector(".box").classList.remove("extend");
        signup.classList.remove("active");
        login.classList.add("active");
    }
})


function validLoginForm(){
    var name = document.getElementById("logName").value;
    var password = document.getElementById("logPassword").value;

    if(name == "" || password == ""){
        document.getElementById("messageError").innerHTML = "Please fill the required fields"
        return false;
    }
    else if(password.length < 8){
        document.getElementById("messageError").innerHTML = "Your Password must contains atleast 8 characters"
        return false;
    }
    else {
        alert("Successfully Logged in")
        return true;
    }
}

function validSignUpForm(){
    const mail = document.getElementById("signEmail").value;
    const name = document.getElementById("signName").value;
    const password = document.getElementById("signPassword").value;

    if(name == "" || mail == "" || password == ""){
        document.getElementById("messageError").innerHTML = "Please fill the required fields"
        return false;
    }
    else if(password.length < 8){
        document.getElementById("messageError").innerHTML = "Your Password must contains atleast 8 characters"
        return false;
    }
    else{
        alert("Successfully Signed Up")
        return true;
    }
}

function validPassword(){
    const password = document.getElementById("createPass").value;

    if (password == "") {
        document.getElementById("messageError").innerHTML = "Please fill the required fields"
        return false;
    }

    else if (password.length < 8) {
        document.getElementById("messageError").innerHTML = "Your password must include atleast 8 characters"
        return false;
    }
    else {
        alert("Password Reset Successfully!");
        return true;
    }
}