//usuario
let usuarios = ["usu01", "usu02", "usu03"];
let contrasenyes = ["pass01", "pass02", "pass03"];


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


//Hacer un get de los datos introducidos en los fields del formulario login, comprobar si existe el usuario, s
//1. Si no existe mostrar texto de que no existe el usuario, 
//2. Si existe el usuario ver si la contraseña introducida esta en la misma posicion que el usuario introducido, si está USUARIO LOGEADO, si no está CONTRASEÑA INCORRECTA
document.getElementById("loginNowBtn").addEventListener("click", () => {

    let emailVal = document.getElementById("email").value;
    let passwdVal = document.getElementById("password").value;


    let i = 0;
    while (i < usuarios.length) {
        console.log("start " + i)
        if (emailVal == usuarios[i]) {
            if (passwdVal == contrasenyes[i]) {
                document.getElementById("result").style.display = "block";
                document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>LOGEADO CORRECTAMENTE</p>";
            } else {
                document.getElementById("result").style.display = "block";
                document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>CONTRASEÑA INCORRECTA</p>";
            }
            break;
        } else if (i == usuarios.length - 1) {
            document.getElementById("result").style.display = "block";
            document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>USUARIO NO ENCONTRADO</p>";
            break;
        }

        i++;
    }


    // if (emailVal == usuarios && passwdVal == passwd) {
    //     document.getElementById("validationMessage").innerHTML = "Usuari Correcte";
    //     document.getElementById("validationMessage").style.color = "green";
    //     document.getElementById("validationMessage").style.display = "block";
    // } else {
    //     document.getElementById("validationMessage").innerHTML = "Credencials incorrectes";
    //     document.getElementById("validationMessage").style.color = "red";
    //     document.getElementById("validationMessage").style.display = "block";
    // }

    // document.getElementById("result").style.display = "block";
    // document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>Email : " + emailVal + " </p> </p> Password : " + passwdVal + " </p>";


});




// //validar form registre
// document.getElementById("registerSubmit").addEventListener("blur", () => {

//booleans para decir true si cumplen, y false si no cumplen
let boolNombre = true;
let boolapellido = true;
let boolemail = true;
let boolpassword = true;
let boolpasswordRepeat = true;
let boolDni = false;




//comprobación del nombre segun el patron
document.getElementById("nombre-register").addEventListener("blur", function () {
    let nombreValue = document.getElementById("nombre-register").value;

    if (!patronNombreApellido.test(nombreValue)) {
        document.getElementById("error-nombre-register").style.color = "red";
        document.getElementById("error-nombre-register").innerHTML = "Nombre incorrecto";

        boolNombre = false;
    } else {
        document.getElementById("error-nombre-register").innerHTML = "";


    }
})



//comprobación del apellido segun el patron
document.getElementById("apellido").addEventListener("blur", function () {

    let apellidoValue = document.getElementById("apellido").value;

    if (!patronNombreApellido.test(apellidoValue)) {
        document.getElementById("error-apellido-register").style.color = "red";
        document.getElementById("error-apellido-register").innerHTML = "Apellido incorrecto";
        boolapellido = false;
    } else {
        document.getElementById("error-apellido-register").innerHTML = "";


    }
});



//comprobación del email segun el patron
document.getElementById("email-register").addEventListener("blur", function () {

    let emailValue = document.getElementById("email-register").value;


    if (!patronEmail.test(emailValue)) {
        document.getElementById("error-email-register").style.color = "red";
        document.getElementById("error-email-register").innerHTML = "Email incorrecto";
        boolemail = false;
    } else {
        document.getElementById("error-email-register").innerHTML = "";


    }
});


//comprobación del password, que sea mayor de 5 caracteres
document.getElementById("password-register").addEventListener("blur", function () {

    let passwordValue = document.getElementById("password-register").value;


    if (passwordValue.length >= 5) {
        document.getElementById("error-password-register").innerHTML = "";


    } else {
        document.getElementById("error-password-register").style.color = "red";
        document.getElementById("error-password-register").innerHTML = "menor que 5";
        boolpassword = false;
    }
})

//comprobación del password repeat, que sea igual que el password inicial
document.getElementById("repeat-password").addEventListener("blur", function () {

    let passwordRepeatVal = document.getElementById("repeat-password").value;
    let passwordValue = document.getElementById("password-register").value;


    if (passwordValue != passwordRepeatVal) {
        document.getElementById("error-password-repeat").style.color = "red";
        document.getElementById("error-password-repeat").innerHTML = "No coinciden las contraseñas";
        boolpasswordRepeat = false;
    } else {
        document.getElementById("error-password-repeat").innerHTML = "";


    }
});


//comprobacion del dni, segun el patron del DNI
document.getElementById("dni").addEventListener("blur", function (passwordValue) {

    let dniValue = document.getElementById("dni").value;


    if (!patronDNI.test(dniValue)) {

        let num = dniValue.substr(0, 8);
        let llet = dniValue.substr(-1);

        if (!verificaDNI(num, llet)) {
            document.getElementById("error-dni-repeat").style.color = "red";
            document.getElementById("error-dni-repeat").innerHTML = "DNI incorrecto";
        }

        boolDni = false;


    } else {
        document.getElementById("error-dni-repeat").innerHTML = "";


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


document.getElementById("registerSubmit").addEventListener("click", function() {

    console.log(boolNombre)
    console.log(boolapellido)
    console.log(boolemail)
    console.log(boolpassword)
    console.log(boolpasswordRepeat)
    console.log(boolDni)


    if(boolNombre && boolapellido && boolemail && boolpassword && boolpasswordRepeat && boolDni) {
        alert("tofo es correcto")
    }else {
        alert("algo falla")
    }
})

