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
        if (emailVal.toLowerCase() == usuarios[i]) {
            if (passwdVal.toLowerCase() == contrasenyes[i]) {
                document.getElementById("result").style.display = "block";
                document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>LOGEADO CORRECTAMENTE</p>";
            } else {
                document.getElementById("result").style.display = "block";
                document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>USUARIO Y/O CONTRASEÑA INCORRECTA</p>";
            }
            break;
        } else if (i == usuarios.length - 1) {
            document.getElementById("result").style.display = "block";
            document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>USUARIO Y/O CONTRASEÑA INCORRECTA</p>";
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




//comprobación del nombre segun el patron
// document.getElementById("nombre-register").addEventListener("blur", function () {
//     let nombreValue = document.getElementById("nombre-register").value;

//     if (!patronNombreApellido.test(nombreValue)) {
//         document.getElementById("error-nombre-register").style.color = "red";
//         document.getElementById("error-nombre-register").innerHTML = "Nombre incorrecto";

//     } else {
//         document.getElementById("error-nombre-register").innerHTML = "";


//     }
// })

//comprobación del nombre segun el patron
function validarNombre() {
    let nombreValue = document.getElementById("nombre-register").value;

    if (!patronNombreApellido.test(nombreValue)) {
        document.getElementById("error-nombre-register").style.color = "red";
        document.getElementById("error-nombre-register").innerHTML = "Nombre incorrecto";

        return false;

    } else {
        document.getElementById("error-nombre-register").innerHTML = "";

        return true;
    }
}

document.getElementById("nombre-register").addEventListener("blur", validarNombre);



//comprobación del apellido segun el patron
// document.getElementById("apellido").addEventListener("blur", function () {

//     let apellidoValue = document.getElementById("apellido").value;

//     if (!patronNombreApellido.test(apellidoValue)) {
//         document.getElementById("error-apellido-register").style.color = "red";
//         document.getElementById("error-apellido-register").innerHTML = "Apellido incorrecto";
//     } else {
//         document.getElementById("error-apellido-register").innerHTML = "";


//     }
// });

//comprobación del apellido segun el patron
function validarApellido() {
    let apellidoValue = document.getElementById("apellido").value;

    if (!patronNombreApellido.test(apellidoValue)) {
        document.getElementById("error-apellido-register").style.color = "red";
        document.getElementById("error-apellido-register").innerHTML = "Apellido incorrecto";

        return false;
    } else {
        document.getElementById("error-apellido-register").innerHTML = "";

        return true;
    }
}

document.getElementById("apellido").addEventListener("blur", validarApellido);



//comprobación del email segun el patron
// document.getElementById("email-register").addEventListener("blur", function () {

//     let emailValue = document.getElementById("email-register").value;


//     if (!patronEmail.test(emailValue)) {
//         document.getElementById("error-email-register").style.color = "red";
//         document.getElementById("error-email-register").innerHTML = "Email incorrecto";
//     } else {
//         document.getElementById("error-email-register").innerHTML = "";


//     }
// });

//comprobación del email segun el patron
function validarEmail() {
    let emailValue = document.getElementById("email-register").value;


    if (!patronEmail.test(emailValue)) {
        document.getElementById("error-email-register").style.color = "red";
        document.getElementById("error-email-register").innerHTML = "Email incorrecto";

        return false;
    } else {
        document.getElementById("error-email-register").innerHTML = "";

        return true;
    }
}

document.getElementById("email-register").addEventListener("blur", validarEmail);


//comprobación del password, que sea mayor de 5 caracteres
// document.getElementById("password-register").addEventListener("blur", function () {

//     let passwordValue = document.getElementById("password-register").value;


//     if (passwordValue.length >= 5) {
//         document.getElementById("error-password-register").innerHTML = "";


//     } else {
//         document.getElementById("error-password-register").style.color = "red";
//         document.getElementById("error-password-register").innerHTML = "menor que 5";
//     }
// })

//comprobación del password, que sea mayor de 5 caracteres
function validarPassword() {
    let passwordValue = document.getElementById("password-register").value;


    if (passwordValue.length >= 5) {
        document.getElementById("error-password-register").innerHTML = "";

        return true;

    } else {
        document.getElementById("error-password-register").style.color = "red";
        document.getElementById("error-password-register").innerHTML = "menor que 5";

        return false;
    }
}

document.getElementById("password-register").addEventListener("blur", validarPassword);


//comprobación del password repeat, que sea igual que el password inicial
// document.getElementById("repeat-password").addEventListener("blur", function () {

//     let passwordRepeatVal = document.getElementById("repeat-password").value;
//     let passwordValue = document.getElementById("password-register").value;


//     if (passwordValue != passwordRepeatVal) {
//         document.getElementById("error-password-repeat").style.color = "red";
//         document.getElementById("error-password-repeat").innerHTML = "No coinciden las contraseñas";
//     } else {
//         document.getElementById("error-password-repeat").innerHTML = "";

//     }
// });


//comprobación del password repeat, que sea igual que el password inicial
function validarPasswordRepeat() {
    let passwordRepeatVal = document.getElementById("repeat-password").value;
    let passwordValue = document.getElementById("password-register").value;


    if (passwordValue != passwordRepeatVal) {
        document.getElementById("error-password-repeat").style.color = "red";
        document.getElementById("error-password-repeat").innerHTML = "No coinciden las contraseñas";

        return false;

    } else {
        document.getElementById("error-password-repeat").innerHTML = "";

        return true;
    }
}

document.getElementById("repeat-password").addEventListener("blur", validarPasswordRepeat);



//comprobacion del dni, segun el patron del DNI
// document.getElementById("dni").addEventListener("blur", function (passwordValue) {

//     let dniValue = document.getElementById("dni").value;


//     if (!patronDNI.test(dniValue)) {

//         let num = dniValue.substr(0, 8);
//         let llet = dniValue.substr(-1);

//         if (!verificaDNI(num, llet)) {
//             document.getElementById("error-dni-repeat").style.color = "red";
//             document.getElementById("error-dni-repeat").innerHTML = "DNI incorrecto";
//         }


//     } else {
//         document.getElementById("error-dni-repeat").innerHTML = "";


//     }
// });


//comprobacion del dni, segun el patron del DNI
function validarDNI() {
    let dniValue = document.getElementById("dni").value;


    if (!patronDNI.test(dniValue)) {

        let num = dniValue.substr(0, 8);
        let llet = dniValue.substr(-1);

        if (!verificaDNI(num, llet)) {
            document.getElementById("error-dni-repeat").style.color = "red";
            document.getElementById("error-dni-repeat").innerHTML = "DNI incorrecto";

            return false;
        }


    } else {
        document.getElementById("error-dni-repeat").innerHTML = "";

        return true;

    }
}

document.getElementById("dni").addEventListener("blur", validarDNI);



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


//funcion que valida si todas las funciones devuelven true.., si lo hacen el usuario se habrá registrado correctamente sin errores, pero si no, no será registrado.
function validarFormulario() {
    const esNombreValido = validarNombre();
    const esApellidoValido = validarApellido();
    const esEmailValido = validarEmail();
    const esPasswordValido = validarPassword();
    const esPasswordRepeatValido = validarPasswordRepeat();
    const esDNIValido = validarDNI();

    // Si todas las validaciones son verdaderas, muestra el mensaje de registro exitoso
    if (esNombreValido && esApellidoValido && esEmailValido && esPasswordValido && esPasswordRepeatValido && esDNIValido) {
        document.getElementById("mensaje-registrado-2").style.display = "block";
        document.getElementById("mensaje-registrado-2").innerHTML = "Usuario Registrado Correctamente";


        usuarios.push(document.getElementById("nombre-register").value);
        contrasenyes.push(document.getElementById("repeat-password").value);

        console.log(usuarios)
        console.log(contrasenyes)

    } else {
        document.getElementById("mensaje-registrado-2").style.display = "block";
        document.getElementById("mensaje-registrado-2").innerHTML = "Datos Incorrectos";
    }
}


//se ejecutará la funcion de validarFormulario() cuando se pulse en el botón de Submit.
document.getElementById("registerSubmit").addEventListener("click", function () {
    validarFormulario();

})




/////BOOOOOKINGGG!!!!!! --------------------------------------------------------------------

let validationBoolIdaVuelta;

document.getElementById("checkIda").addEventListener("click", () => {
    selectIda();
});

document.getElementById("checkIdaVuelta").addEventListener("click", () => {
    validationBoolIdaVuelta = selectIdaVuelta();
});


document.getElementById("bookingSubmit").addEventListener("click", () => {
    let origen;
    let destino;
    let fechaIda;
    let fechaVuelta;
    let validationBoolOriginDestionation;
    let validationBoolUpToSixMonthsIda;
    let validationBoolUpToSixMonthsVuelta;
    let validationBoolPastDays;
    let validationBoolPastDaysThanIda;
    fechaIda = document.getElementById("dateIda").value;
    fechaVuelta = document.getElementById("dateVuelta").value;


    if (validationBoolIdaVuelta) {

        alert("ida y vuelta")


        origen = selectOrigin();
        destino = selectDestination();

        validationBoolOriginDestionation = validateOriginDestination(origen, destino);

        validationBoolUpToSixMonthsIda = validateUpToSixMonthsIda(fechaIda);
        validationBoolUpToSixMonthsVuelta = validateUpToSixMonthsVuelta(fechaVuelta);

        validationBoolPastDays = validatePastDays(fechaIda);
        validationBoolPastDaysThanIda = validatePastDaysThanIda(fechaIda, fechaVuelta);

        let fechaIdaVuelo = new Date(fechaIda);
        let fechaVueltaVuelo = new Date(fechaVuelta);

        if (validationBoolOriginDestionation && validationBoolUpToSixMonthsIda && validationBoolUpToSixMonthsVuelta && validationBoolPastDays && validationBoolPastDaysThanIda) {
            alert("idaa y vueltaaaa")
            document.getElementById("valorBooking").innerHTML = `${fechaIdaVuelo.getDate()}/${fechaIdaVuelo.getMonth()+1}/${fechaIdaVuelo.getFullYear()} --> Hora de anada : 12:30 - Preu : 120€`;
            document.getElementById("valorBooking").innerHTML += `${fechaVueltaVuelo.getDate()}/${fechaVueltaVuelo.getMonth()+1}/${fechaVueltaVuelo.getFullYear()} --> Hora de anada : 10:30 - Preu : 220€`;
        } else {
            alert("ALGO FALLA")
        }

    }else{
        alert("solo ida")

        origen = selectOrigin();
        destino = selectDestination();

        validationBoolOriginDestionation = validateOriginDestination(origen, destino);

        validationBoolUpToSixMonthsIda = validateUpToSixMonthsIda(fechaIda);
        validationBoolPastDays = validatePastDays(fechaIda);

        let fechaIdaVuelo = new Date(fechaIda);

        if (validationBoolOriginDestionation && validationBoolUpToSixMonthsIda && validationBoolPastDays) {
            alert("holaaaaaaa")
            document.getElementById("valorBooking").innerHTML = `${fechaIdaVuelo.getDate()}/${fechaIdaVuelo.getMonth()+1}/${fechaIdaVuelo.getFullYear()} --> Hora de anada : 18:30 - Preu : 120€`;
            // document.getElementById("valorBooking").innerHTML = `Hora de anada : 18:30" + " Preu : 120€`;
        } else {
            alert("ALGO FALLA")
        }

    }



})






//FUNCIONES BOOKING

//selectIda() function that if you click on "Ida", it will show just one input date for "Ida"
function selectIda() {
    let ida = document.getElementById("checkIda").value;

    if (ida == "Ida") {
        if (document.getElementById("idaField").style.display == "none") {

            document.getElementById("vueltaField").style.display = "block";
        } else {
            document.getElementById("vueltaField").style.display = "none";
        }
    }
}




//selectIdaVuelta() is a function that checks if you choosed "Ida y Vuelta" it will show you the both inputs.
function selectIdaVuelta() {
    let idaVuelta = document.getElementById("checkIdaVuelta").value;

    if (idaVuelta == "idaYvuelta") {
        if (document.getElementById("vueltaField").style.display == "none") {

            document.getElementById("vueltaField").style.display = "block";

        }
    }
    return true;
}




//selectOrigin() gets the value of the select input for origen
function selectOrigin() {
    return document.getElementById("origen").value;
}




//selectDestination() gets the value of the select input for destino
function selectDestination() {
    return document.getElementById("destino").value;
}




//validateOriginDestination(origen, destino) does a validation to check if origen is the same value as the destino, if they are the same will popup an error message but if not it won't show anything.
function validateOriginDestination(origen, destino) {
    if (origen == destino) {
        document.getElementById("mensaje-error-ida").innerHTML = "Ida no puede ser igual a Vuelta";
        document.getElementById("mensaje-error-vuelta").innerHTML = "Vuelta no puede ser igual a Ida";

        document.getElementById("mensaje-error-ida").style.color = "red";
        document.getElementById("mensaje-error-vuelta").style.color = "red";

        return false;
    } else {
        document.getElementById("mensaje-error-ida").innerHTML = "";
        document.getElementById("mensaje-error-vuelta").innerHTML = "";

        return true;
    }
}




//validateUpToSixMonths(fechaIda) is a function that gets an argument value of the date input of just Ida, and validates that Ida cannot be a date bigger than 6 months since now.
function validateUpToSixMonthsIda(fechaIda) {

    if (fechaIda) {
        const fechaSeleccionada = new Date(fechaIda);
        const fechaActual = new Date();

        // Añade 6 meses a la fecha actual
        fechaActual.setMonth(fechaActual.getMonth() + 6);

        if (!(fechaSeleccionada <= fechaActual)) {
            document.getElementById("errorFechaIda").innerHTML = "La fecha de ida no puede ser en más de 6 meses.";
            document.getElementById("errorFechaIda").style.color = "red";

            return false;
        } else {
            document.getElementById("errorFechaIda").innerHTML = "";

            return true;
        }
    }
}



function validateUpToSixMonthsVuelta(fechaVuelta) {

    if (fechaVuelta) {
        const fechaSeleccionada = new Date(fechaVuelta);
        const fechaActual = new Date();

        // Añade 6 meses a la fecha actual
        fechaActual.setMonth(fechaActual.getMonth() + 6);

        if (!(fechaSeleccionada <= fechaActual)) {
            document.getElementById("errorFechaVuelta").innerHTML = "La fecha de ida no puede ser en más de 6 meses.";
            document.getElementById("errorFechaVuelta").style.color = "red";

            return false;
        } else {
            document.getElementById("errorFechaVuelta").innerHTML = "";

            return true;
        }
    }
}




//validateUpToSixMonths(fechaIda) is a function that validates the past dates, if you introduce a past date it will popup an error message.
function validatePastDays(fechaIda) {
    if (fechaIda) {
        const fechaSeleccionada = new Date(fechaIda);
        const fechaActual = new Date();

        // quita 1 dia a la fecha actual
        fechaActual.setDate(fechaActual.getDate() - 1);

        if (!(fechaSeleccionada > fechaActual)) {
            document.getElementById("errorFechaIda-2").innerHTML = "La fecha de ida no puede ser del pasado.";
            document.getElementById("errorFechaIda-2").style.color = "red";

            return false;
        } else {
            document.getElementById("errorFechaIda-2").innerHTML = "";
            return true;

        }
    }
}



//validateUpToSixMonths(fechaIda) is a function that validates the past dates, if you introduce a past date it will popup an error message.
function validatePastDaysThanIda(fechaIda, fechaVuelta) {

    if (fechaVuelta) {
        const fechaSeleccionadaVuelta = new Date(fechaVuelta);
        const fechaSeleccionadaIda = new Date(fechaIda);



        // // quita 1 dia a la fecha actual
        // fechaIdaAnt.setDate(fechaIdaAnt.getDate());

        if (!(fechaSeleccionadaVuelta >= fechaSeleccionadaIda)) {
            document.getElementById("errorFechaVuelta-2").innerHTML = "La fecha no puede ser anterior que la de Ida.";
            document.getElementById("errorFechaVuelta-2").style.color = "red";

            return false;
        } else {
            document.getElementById("errorFechaVuelta-2").innerHTML = "";

            return true;
        }
    }
}

