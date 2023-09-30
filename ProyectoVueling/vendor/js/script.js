//usuario
let usuarios = "daw2@proven.cat";
let passwd = "alumnat";

//cuando cargue la página todos los forms estarán en display none, (no se verán)
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("validationMessage").style.display = "none";
});

//funcion para hacer aparecer el formulario de login
document.getElementById("login-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "block";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "none";

    document.getElementById("result").style.display = "none";

});

//funcion para hacer aparecer el formulario de register
document.getElementById("register-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "block";
    document.getElementById("booking-div").style.display = "none";

    document.getElementById("result").style.display = "none";

});

//funcion para hacer aparecer el formulario de booking
document.getElementById("booking-btn").addEventListener("click", () => {


    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "block";

    document.getElementById("result").style.display = "none";

});


//Hacer un get de los datos introducidos en los fields del formulario login, y después mostrarlos en un alert.
document.getElementById("loginNowBtn").addEventListener("click", () => {
    
    let emailVal = document.getElementById("email").value;

    let passwdVal = document.getElementById("password").value;

    if(emailVal == usuarios && passwdVal == passwd) {
        document.getElementById("validationMessage").innerHTML = "Usuari Correcte";
        document.getElementById("validationMessage").style.color = "green";
        document.getElementById("validationMessage").style.display = "block";
    }else {
        document.getElementById("validationMessage").innerHTML = "Credencials incorrectes";
        document.getElementById("validationMessage").style.color = "red";
        document.getElementById("validationMessage").style.display = "block";
    }

    document.getElementById("result").style.display = "block";



    document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>Email : " + emailVal     + " </p> </p> Password : " + passwdVal + " </p>";


});




