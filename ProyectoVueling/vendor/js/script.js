//usuario
let usuarios = "daw2@proven.cat";
let passwd = "alumnat";

//patrones para formulario de registre
const patronNombreApellido = /^[A-Za-z\s]+$/;
const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
const patronDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;


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

    if (emailVal == usuarios && passwdVal == passwd) {
        document.getElementById("validationMessage").innerHTML = "Usuari Correcte";
        document.getElementById("validationMessage").style.color = "green";
        document.getElementById("validationMessage").style.display = "block";
    } else {
        document.getElementById("validationMessage").innerHTML = "Credencials incorrectes";
        document.getElementById("validationMessage").style.color = "red";
        document.getElementById("validationMessage").style.display = "block";
    }

    document.getElementById("result").style.display = "block";



    document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>Email : " + emailVal + " </p> </p> Password : " + passwdVal + " </p>";


});




// //validar form registre
document.getElementById("registerSubmit").addEventListener("click", () => {

    //booleans para decir true si cumplen, y false si no cumplen
    let boolNombre = true;
    let boolapellido = true;
    let boolemail = true;
    let boolpassword = true;
    let boolpasswordRepeat = true;
    let boolDni = true;

    //recogemos los valores de cada input
    let nombreValue = document.getElementById("nombre").value;
    let apellidoValue = document.getElementById("apellido").value;
    let emailValue = document.getElementById("email-register").value;
    let passwordValue = document.getElementById("password-register").value;
    let passwordRepeatVal = document.getElementById("repeat-password").value;
    let dniValue = document.getElementById("dni").value;


    //comprobación del nombre segun el patron
    if (!patronNombreApellido.test(nombreValue)) {
        document.getElementById("error-nombre-register").style.color = "red";
        document.getElementById("error-nombre-register").innerHTML = "Nombre incorrecto";
        boolNombre = false;
    } else {
        document.getElementById("error-nombre-register").innerHTML = "";
    }

    //comprobación del apellido segun el patron
    if (!patronNombreApellido.test(apellidoValue)) {
        document.getElementById("error-apellido-register").style.color = "red";
        document.getElementById("error-apellido-register").innerHTML = "Apellido incorrecto";
        boolapellido = false;
    } else {
        document.getElementById("error-apellido-register").innerHTML = "";
    }

    //comprobación del email segun el patron
    if (!patronEmail.test(emailValue)) {
        document.getElementById("error-email-register").style.color = "red";
        document.getElementById("error-email-register").innerHTML = "Email incorrecto";
        boolemail = false;
    } else {
        document.getElementById("error-email-register").innerHTML = "";
    }

    //comprobación del password, que sea mayor de 5 caracteres
    if (passwordValue.length >= 5) {
        document.getElementById("error-password-register").innerHTML = "";
    } else {
        document.getElementById("error-password-register").style.color = "red";
        document.getElementById("error-password-register").innerHTML = "menor que 5";
        boolpassword = false;
    }

    //comprobación del password repeat, que sea igual que el password inicial
    if (passwordValue != passwordRepeatVal) {
        document.getElementById("error-password-repeat").style.color = "red";
        document.getElementById("error-password-repeat").innerHTML = "No coinciden las contraseñas";
        boolpasswordRepeat = false;
    } else {
        document.getElementById("error-password-repeat").innerHTML = "";
    }


    //comprobacion del dni, segun el patron del DNI
    if (!patronDNI.test(dniValue)) {

        let num = dniValue.substr(0, 8);
        let llet = dniValue.substr(-1);

        if (!verificaDNI(num, llet)) {
            document.getElementById("error-dni-repeat").style.color = "red";
            document.getElementById("error-dni-repeat").innerHTML = "DNI incorrecto";
            boolDni = false;
        }


    } else {
        document.getElementById("error-dni-repeat").innerHTML = "";
    }


    //comprobamos que todos los valores boolean sean true y mostramos el mensaje, y si no lo son, no mostramos nada
    if (boolNombre && boolapellido && boolemail && boolpassword && boolpasswordRepeat && boolDni) {
        document.getElementById("mensaje-registrado").innerHTML = "USUARI ENREGISTRAT CORRECTAMENT";
    } else {
        document.getElementById("mensaje-registrado").innerHTML = "";
    }

});


function verificaDNI(num, lle) {
    let flag = false;
    let lletres = "TRWAGMYFPDXBNJZSQVHLCKE";



    let residu = num % 23;

    let lletraBona = lletres[residu];


    if (lletraBona == lle.toUpperCase()) {
        flag = true;
    }

    return flag;
}


