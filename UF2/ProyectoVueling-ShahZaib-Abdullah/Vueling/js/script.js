//variable para ver si todo fue correcto
let allWentGood = false;



let precioIdaSeleccionado;
let precioIdaVueltaSeleccionado1;
let precioIdaVueltaSeleccionado2;

let precioVuelta;



//usuario
let usuarios = ["usu01", "usu02", "usu03"];
let contrasenyes = ["pass01", "pass02", "pass03"];


//patrones para formulario de registre
let patronNombreApellido = /^[A-Za-z\s]+$/;
const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
const patronDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;




//cuando cargue la página todos los forms estarán en display none, (no se verán)
document.addEventListener("DOMContentLoaded", function () {

    /**
     * check, check2 --> llama a la funcion checkYourCookie pasando le el nombre de la cookie, retorna true si ya existe, y false si no existe
     */
    let check = checkYourCookie("nomUsuari");
    let check2 = checkYourCookie("contador");

    let cookieAvanzar = getCookie("contador");

    if (cookieAvanzar != "") {

        cookieAvanzar++;
        setCookie("contador", cookieAvanzar);
    }


    /**
     * Comprueba que los dos valores sean false, si son false los DOS llama la funcion showCookieModal
     */
    if (!check && !check2) {
        showCookieModal();
    }


    /**
     * localStorage("login"): true --> muestra el la opción del LOGOUT
     * localStorage("login"): false --> muestra solo la opción de LOGIN y REGISTER, no muestra la opción LOGOUT
     */
    if (localStorage.getItem("login") == "true") {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("register-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
    } else {
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("register-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "none";
    }


    /**
     * Al recargar todos los formularios estarán ocultos
     */
    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("validationMessage").style.display = "none";



});


/**
 * showCookieModal() --> muestra el div para aceptar las cookies con tres opciones
 * allCookies --> allCookies();
 * minCookies --> minCookies();
 */
function showCookieModal() {
    document.getElementById("allCookiesBtn").addEventListener("click", allCookies);
    document.getElementById("minCookiesBtn").addEventListener("click", minCookies);
    document.getElementById("rechazarCookiesBtn").addEventListener("click", rechazarCookies);

    document.getElementById("cookieModal").style.display = "block";
}

/**
 * allCookies() --> crea las dos cookies
 */

function allCookies() {
    setCookie("nomUsuari", "acceptada la cookie", 365);
    setCookie("contador", 1, 365);

    document.getElementById("cookieModal").style.display = "none";
}

/**
 * minCookies() --> crea solo una cookie
 */
function minCookies() {
    setCookie("nomUsuari", "acceptada la cookie", 365);
    document.getElementById("cookieModal").style.display = "none";
}


/**
 * rechazarCookies() --> no crea cookies, pero cada vez que se recargue preguntará el modal, porque no existen cookies
 */
function rechazarCookies() {
    document.getElementById("cookieModal").style.display = "none";
}




function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkYourCookie(accept) {
    let acceptCookie = getCookie(accept);

    let existe = true;

    if (acceptCookie == "") {
        existe = false;
    }

    return existe;
}







//funcion para hacer aparecer el formulario de login
document.getElementById("login-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "block";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "none";
    document.getElementById("tarifa-div").style.display = "none";

    document.getElementById("result").style.display = "none";

});

//funcion para hacer aparecer el formulario de register
document.getElementById("register-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "block";
    document.getElementById("booking-div").style.display = "none";
    document.getElementById("tarifa-div").style.display = "none";

    document.getElementById("result").style.display = "none";

});

//funcion para hacer aparecer el formulario de booking
document.getElementById("booking-btn").addEventListener("click", () => {


    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "block";
    document.getElementById("tarifa-div").style.display = "none";

    document.getElementById("result").style.display = "none";

});

document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.setItem("login", "false");
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("register-btn").style.display = "block";
    document.getElementById("logout-btn").style.display = "none";
});



//Hacer un get de los datos introducidos en los fields del formulario login, comprobar si existe el usuario, s
//1. Si no existe mostrar texto de que no existe el usuario, 
//2. Si existe el usuario ver si la contraseña introducida esta en la misma posicion que el usuario introducido, si está USUARIO LOGEADO, si no está CONTRASEÑA INCORRECTA
document.getElementById("loginNowBtn").addEventListener("click", () => {

    let emailVal = document.getElementById("email").value;
    let passwdVal = document.getElementById("password").value;

    let myUser = {
        email: emailVal,
        password: passwdVal
    }

    //POST
    fetch('http://localhost:3000/vueling/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myUser),
    })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.error) {
                alert(responseData.message);
            } else {
                if (responseData.results && responseData.results.length > 0) {
                    alert("Credenciales correctas");
                    localStorage.setItem("login", true);
                    // showLoginTrue();

                    //cuando se haya logueado correctamente, se pondra a block el logout, los demas a none
                    document.getElementById("login-btn").style.display = "none";
                    document.getElementById("register-btn").style.display = "none";
                    document.getElementById("logout-btn").style.display = "block";



                    // localStorage.setItem("loggedIn", true);

                    document.getElementById("result").style.display = "block";
                    document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>LOGEADO CORRECTAMENTE</p>";
                } else {
                    alert("Credenciales incorrectas");

                    //cuando no se haya logueado correctamente, se pondra a block el login y register, logout  a none
                    document.getElementById("login-btn").style.display = "block";
                    document.getElementById("register-btn").style.display = "block";
                    document.getElementById("logout-btn").style.display = "none";



                    document.getElementById("result").style.display = "block";
                    document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>USUARIO Y/O CONTRASEÑA INCORRECTA</p>";
                }
            }
        })
        .catch(err => console.log('La solicitud ha fallado:', err));

});




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






document.addEventListener("DOMContentLoaded", function () {



    const selectOrigen = document.getElementById("origen");
    const selectDestino = document.getElementById("destino");
    const selectCursos = document.getElementById("cursos");
    const formulariDiv = document.getElementById("formulari");

    //GET
    fetch('http://localhost:3000/vueling/booking')
        .then(response => response.json())
        .then(json => {
            if (json.error) { //comprueba si hay algun error, si lo hay, lo muestra
                formulariDiv.innerHTML = json.message;
            } else {
                //si no hay ningun error crea las opcions dinamicamente y las muestra
                for (let index = 0; index < json.results.length; index++) {

                    const optionCiudad = document.createElement('option');
                    optionCiudad.value = json.results[index].nomCiutat;
                    optionCiudad.textContent = json.results[index].nomCiutat;
                    let nuevaVar = optionCiudad.cloneNode(true)
                    selectOrigen.appendChild(optionCiudad);
                    selectDestino.appendChild(nuevaVar);
                }

                // Mostrar el formulario después de cargar las opciones
                formulariDiv.style.display = 'block';
            }
        })
        .catch(error => console.log('La solicitud ha fallado:', error));



    //variable adultos
    let adultos = 1;

    //variable niños
    let ninos = 0;

    //variable bebés
    let bebes = 0;

    //info detallada de cuantos adultos hay, cuantos niños hay y cuantos bebes hay
    document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;

    //suma total de los pasajeros
    document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;


    ////SECCION SUMAR Y RESTAR ADULTOS
    //sumar adultos
    document.getElementById("sumarAdultos").addEventListener("click", () => {

        if (adultos >= 9) {
            document.getElementById("numTotalAdultos").innerHTML = adultos;
        } else {
            adultos++;
            document.getElementById("numTotalAdultos").innerHTML = adultos;

        }


        document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;

        document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;

    })

    //restar adultos
    document.getElementById("restarAdultos").addEventListener("click", () => {

        if (adultos == 0) {
            adultos = 1;
            document.getElementById("numTotalAdultos").innerHTML = adultos;
            document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;
            document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;


        } else {
            adultos--;

            if (adultos == 0) {
                adultos = 1;
                document.getElementById("numTotalAdultos").innerHTML = adultos;
                document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;
                document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;
            }

            document.getElementById("numTotalAdultos").innerHTML = adultos;
            document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;
            document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;


        }


        document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;

    })


    ////SECCION SUMAR Y RESTAR NIÑOS
    //sumar niños
    document.getElementById("sumarNinos").addEventListener("click", () => {

        if (ninos >= 9) {
            document.getElementById("numTotalNinos").innerHTML = ninos;
        } else {
            ninos++;
            document.getElementById("numTotalNinos").innerHTML = ninos;

        }

        document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;

        document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;

    })

    //restar niños
    document.getElementById("restarNinos").addEventListener("click", () => {

        if (ninos > 0) {
            ninos--;
            document.getElementById("numTotalNinos").innerHTML = ninos;
        } else {
            document.getElementById("numTotalNinos").innerHTML = 0;
        }

        document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;

        document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;

    })



    ////SECCION SUMAR Y RESTAR BEBÉS
    //sumar niños
    document.getElementById("sumarBebes").addEventListener("click", () => {

        if (bebes >= 9) {
            document.getElementById("numTotalBebes").innerHTML = bebes;
        } else {
            bebes++;
            document.getElementById("numTotalBebes").innerHTML = bebes;

        }

        document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;

        document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;

    })

    //restar niños
    document.getElementById("restarBebes").addEventListener("click", () => {

        if (bebes > 0) {
            bebes--;
            document.getElementById("numTotalBebes").innerHTML = bebes;
        } else {
            document.getElementById("numTotalBebes").innerHTML = 0;
        }

        document.getElementById("detailInfoPassenger").innerHTML = `${adultos} Adultos, ${ninos} Ninños, ${bebes} Bebés`;


        document.getElementById("numAllPassengers").innerHTML = `${adultos + ninos + bebes} Pasajeros`;
    })









    document.getElementById("checkIda").addEventListener("click", () => {
        selectIda();
    });

    document.getElementById("checkIdaVuelta").addEventListener("click", () => {
        selectIdaVuelta();
    });




    const elementIdaVuelta = document.getElementById("valorBookingIdaVuelta");
    const elementIda = document.getElementById("valorBookingIda");

    document.getElementById("bookingSubmit").addEventListener("click", () => {

        if (elementIdaVuelta.style.display == "none") {
            elementIdaVuelta.style.display = "block";
            elementIdaVuelta.innerHTML = "";
        } else {
            elementIdaVuelta.innerHTML = "";

        }

        if (elementIda.style.display == "none") {
            elementIda.style.display = "block";
            elementIda.innerHTML = "";
        } else {
            elementIda.innerHTML = "";

        }

        let origen;
        let destino;
        let fechaIda;
        let fechaVuelta;
        let validationBoolOriginDestionation;
        let validationBoolUpToSixMonthsIda;
        let validationBoolUpToSixMonthsVuelta;
        let validationBoolPastDays;
        let validationBoolPastDaysThanIda;
        // let validarNombreBooking;
        fechaIda = document.getElementById("dateIda").value;
        fechaVuelta = document.getElementById("dateVuelta").value;



        let horaIda = ["23:15", "20:40"];
        let precioIdaCorresp = ["130", "175"];

        let horaVuelta = ["06:00", "07:40"];
        let precioVueltaCorresp = ["195", "125"];

        let arrayAnada = [];


        if (document.getElementById("checkIdaVuelta").checked) {

            alert("ida y vuelta")


            origen = selectOrigin();
            destino = selectDestination();

            validationBoolOriginDestionation = validateOriginDestination(origen, destino);

            validationBoolUpToSixMonthsIda = validateUpToSixMonthsIda(fechaIda);
            validationBoolUpToSixMonthsVuelta = validateUpToSixMonthsVuelta(fechaVuelta);

            validationBoolPastDays = validatePastDays(fechaIda);
            validationBoolPastDaysThanIda = validatePastDaysThanIda(fechaIda, fechaVuelta);



            if (validationBoolOriginDestionation && validationBoolUpToSixMonthsIda && validationBoolUpToSixMonthsVuelta && validationBoolPastDays && validationBoolPastDaysThanIda) {
                alert("idaa y vueltaaaa")

                document.getElementById("booking-div").style.display = "none";

                if (elementIdaVuelta.style.display == "none") {
                    elementIdaVuelta.style.display = "block";
                    elementIdaVuelta.innerHTML = "";
                }

                /////// ida
                let createParagraph = document.createElement("p");
                createParagraph.innerHTML = "IDA";
                elementIdaVuelta.appendChild(createParagraph);

                for (let index = 0; index < horaIda.length; index++) {


                    let createRadioBtnIda = document.createElement("input");
                    createRadioBtnIda.type = "radio";
                    createRadioBtnIda.name = "chooseIdaHoraFecha";
                    createRadioBtnIda.value = horaIda[index] + " - " + precioIdaCorresp[index];
                    // precioIdaVueltaSeleccionado1_1 = precioIdaCorresp[index];


                    createRadioBtnIda.id = "radioIda_" + index;
                    arrayAnada.push(createRadioBtnIda.value);
                    elementIdaVuelta.appendChild(createRadioBtnIda);

                    let createHoraLabelIda = document.createElement("label");
                    createHoraLabelIda.innerHTML = horaIda[index] + " - " + precioIdaCorresp[index] + "€";
                    elementIdaVuelta.appendChild(createHoraLabelIda);

                }

                //////////////// vuelta
                let createParagraphVuelta = document.createElement("p");
                createParagraphVuelta.innerHTML = "VUELTA";
                elementIdaVuelta.appendChild(createParagraphVuelta);

                for (let index = 0; index < horaVuelta.length; index++) {

                    let createRadioBtnVuelta = document.createElement("input");
                    createRadioBtnVuelta.type = "radio";
                    createRadioBtnVuelta.name = "chooseVueltaHoraFecha";
                    createRadioBtnVuelta.value = horaVuelta[index] + " - " + precioVueltaCorresp[index];
                    // precioIdaVueltaSeleccionado1_2 = precioVueltaCorresp[index];


                    createRadioBtnVuelta.id = "radioVuelta_" + index;
                    arrayAnada.push(createRadioBtnVuelta.value);
                    elementIdaVuelta.appendChild(createRadioBtnVuelta);

                    let createHoraLabelVuelta = document.createElement("label");
                    createHoraLabelVuelta.innerHTML = horaVuelta[index] + " - " + precioVueltaCorresp[index] + "€";
                    elementIdaVuelta.appendChild(createHoraLabelVuelta);

                    // precioVuelta = precioIdaCorresp[index];

                    // alert(precioVuelta);

                }

                let createButtonBooking_2 = document.createElement("button");
                createButtonBooking_2.innerHTML = "Fer el booking";
                createButtonBooking_2.id = "finalBooking";
                elementIdaVuelta.appendChild(createButtonBooking_2);

                ////////////// ida
                document.getElementById("radioIda_0").addEventListener("click", () => {
                    alert(document.getElementById("radioIda_0").value);

                    for (let index = 0; index < arrayAnada.length; index++) {
                        if (document.getElementById("radioIda_0").value == arrayAnada[index]) {
                            alert("son iguales 1")
                            precioIdaVueltaSeleccionado1 = arrayAnada[index].slice(8, 11);
                        }



                    }

                })

                document.getElementById("radioIda_1").addEventListener("click", () => {
                    alert(document.getElementById("radioIda_1").value);


                    for (let index = 0; index < arrayAnada.length; index++) {
                        if (document.getElementById("radioIda_1").value == arrayAnada[index]) {
                            alert("son iguales 2")

                            precioIdaVueltaSeleccionado1 = arrayAnada[index].slice(8, 11);
                        }

                    }
                })




                /////////// vuelta
                document.getElementById("radioVuelta_0").addEventListener("click", () => {
                    alert(document.getElementById("radioVuelta_0").value);

                    for (let index = 0; index < arrayAnada.length; index++) {
                        if (document.getElementById("radioVuelta_0").value == arrayAnada[index]) {
                            alert("son iguales -1")
                            precioIdaVueltaSeleccionado2 = arrayAnada[index].slice(8, 11);

                        }

                    }

                })

                document.getElementById("radioVuelta_1").addEventListener("click", () => {
                    alert(document.getElementById("radioVuelta_1").value);


                    for (let index = 0; index < arrayAnada.length; index++) {
                        if (document.getElementById("radioVuelta_1").value == arrayAnada[index]) {
                            alert("son iguales -2")
                            precioIdaVueltaSeleccionado2 = arrayAnada[index].slice(8, 11);
                        }

                    }
                })


                document.getElementById("finalBooking").addEventListener("click", () => {


                    // Verificar si al menos uno de los botones de radio está seleccionado
                    const radioButtons = document.querySelectorAll('input[type="radio"][name="chooseIdaHoraFecha"]');
                    const radioButtonsVuelta = document.querySelectorAll('input[type="radio"][name="chooseVueltaHoraFecha"]');
                    let atLeastOneSelected = false;

                    for (let i = 0; i < radioButtons.length; i++) {
                        for (let j = 0; j < radioButtonsVuelta.length; j++) {
                            if (radioButtons[i].checked && radioButtonsVuelta[j].checked) {
                                atLeastOneSelected = true;
                                allWentGood = true;
                                break; // No es necesario seguir verificando si una combinación ya está seleccionada
                            }
                        }
                        if (atLeastOneSelected) {
                            break; // No es necesario seguir verificando si una combinación ya está seleccionada
                        }
                    }


                    if (atLeastOneSelected) {
                        const viaje = {
                            origen: document.getElementById("origen").value,
                            destino: document.getElementById("destino").value,
                            fechaIda: document.getElementById("dateIda").value,
                            fechaVuelta: document.getElementById("dateVuelta").value,
                            adultos: adultos,
                            ninos: ninos,
                            bebes: bebes,
                            precioIda: precioIdaVueltaSeleccionado1,
                            precioVuelta: precioIdaVueltaSeleccionado2
                        };

                        alert("Información del viaje: " + JSON.stringify(viaje));



                        document.getElementById("registerIdaVuelta").style.display = "none";
                        document.getElementById("tarifa-div").style.display = "block";


                        //TARIFAS ---------------------------

                        tariffAction();


                    } else {
                        alert("selecciona una hora")
                    }


                })

            } else {
                alert("ALGO FALLA")
            }

        } else {
            alert("solo ida")


            origen = selectOrigin();
            destino = selectDestination();

            validationBoolOriginDestionation = validateOriginDestination(origen, destino);

            validationBoolUpToSixMonthsIda = validateUpToSixMonthsIda(fechaIda);
            validationBoolPastDays = validatePastDays(fechaIda);
            // validarNombreBooking = nombreBookingValidation();


            // let fechaIdaVuelo = new Date(fechaIda);

            if (validationBoolOriginDestionation && validationBoolUpToSixMonthsIda && validationBoolPastDays) {
                alert("holaaaaaaa")

                if (elementIda.style.display == "none") {
                    elementIda.style.display = "block";
                    elementIda.innerHTML = ""; //siempre despues de comprobar, vaciamos el HTML de la variable para que no se duplique lo que hay adentro.
                }

                //////// ida
                let createParagraph = document.createElement("p");
                createParagraph.innerHTML = "IDA";
                elementIda.appendChild(createParagraph);

                for (let index = 0; index < horaIda.length; index++) {


                    let createRadioBtnIda = document.createElement("input");
                    createRadioBtnIda.type = "radio";
                    createRadioBtnIda.name = "chooseIdaHoraFecha2";
                    createRadioBtnIda.value = horaIda[index] + " - " + precioIdaCorresp[index];
                    createRadioBtnIda.id = "radioIda_" + index;
                    arrayAnada.push(createRadioBtnIda.value);
                    elementIda.appendChild(createRadioBtnIda);

                    let createHoraLabelIda = document.createElement("label");
                    createHoraLabelIda.innerHTML = horaIda[index] + " - " + precioIdaCorresp[index] + "€";
                    elementIda.appendChild(createHoraLabelIda);




                }

                let createButtonBooking_2 = document.createElement("button");
                createButtonBooking_2.innerHTML = "Fer el booking";
                createButtonBooking_2.id = "finalBookingIda";
                elementIda.appendChild(createButtonBooking_2);



                document.getElementById("radioIda_0").addEventListener("click", () => {
                    alert(document.getElementById("radioIda_0").value);

                    for (let index = 0; index < arrayAnada.length; index++) {
                        if (document.getElementById("radioIda_0").value == arrayAnada[index]) {
                            alert("son iguales")
                        }

                    }

                })

                document.getElementById("radioIda_1").addEventListener("click", () => {
                    alert(document.getElementById("radioIda_1").value);


                    for (let index = 0; index < arrayAnada.length; index++) {
                        if (document.getElementById("radioIda_1").value == arrayAnada[index]) {
                            alert("son iguales")
                        }

                    }
                })


                document.getElementById("finalBookingIda").addEventListener("click", () => {
                    // Verificar si al menos uno de los botones de radio está seleccionado
                    const radioButtons = document.querySelectorAll('input[type="radio"][name="chooseIdaHoraFecha2"]');
                    let atLeastOneSelected = false;

                    for (let i = 0; i < radioButtons.length; i++) {
                        if (radioButtons[i].checked) {
                            atLeastOneSelected = true;
                            break; // No es necesario seguir verificando si uno ya está seleccionado
                        }
                    }

                    if (atLeastOneSelected) {
                        // Al menos uno de los botones de radio está seleccionado, procede con la creación del objeto "viaje"
                        viaje = {
                            nombre: document.getElementById("nombre-booking").value,
                            origen: document.getElementById("origen").value,
                            fechaIda: document.getElementById("dateIda").value,
                            fechaVuelta: document.getElementById("dateVuelta").value,
                            adultos: adultos,
                            ninos: ninos,
                            bebes: bebes,
                            precioVuelta: precioVuelta
                        };

                        alert("Información del viaje: " + JSON.stringify(viaje));
                    } else {
                        alert("selecciona una hora")
                    }

                })



                // document.getElementById("valorBooking").innerHTML = `${fechaIdaVuelo.getDate()}/${fechaIdaVuelo.getMonth() + 1}/${fechaIdaVuelo.getFullYear()} --> Hora de anada : 18:30 - Preu : 120€`;
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

                elementIdaVuelta.style.display = "none";

            }
        }
    }




    //selectIdaVuelta() is a function that checks if you choosed "Ida y Vuelta" it will show you the both inputs.
    function selectIdaVuelta() {
        let idaVuelta = document.getElementById("checkIdaVuelta").value;

        if (idaVuelta == "idaYvuelta") {
            if (document.getElementById("vueltaField").style.display == "none") {

                document.getElementById("vueltaField").style.display = "block";

                elementIda.style.display = "none";



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

    // //comprobación del nombre segun el patron
    // function nombreBookingValidation() {

    //     let nombreValue = document.getElementById("nombre-booking").value;

    //     if (!patronNombreApellido.test(nombreValue)) {
    //         document.getElementById("error-nombre-booking").style.color = "red";
    //         document.getElementById("error-nombre-booking").innerHTML = "Nombre incorrecto";

    //         return false;

    //     } else {
    //         document.getElementById("error-nombre-booking").innerHTML = "";

    //         return true;
    //     }
    // }


    function tariffAction() {
        //declare
        document.getElementById("basicPrice").value = Number(precioIdaVueltaSeleccionado1) + Number(precioIdaVueltaSeleccionado2);
        document.getElementById("basicPriceLabel").innerHTML = Number(precioIdaVueltaSeleccionado1) + Number(precioIdaVueltaSeleccionado2) + "€";

        document.getElementById("timeFlexPrice").value = Number(precioIdaVueltaSeleccionado1) + Number(precioIdaVueltaSeleccionado2) + 150 + "€";
        document.getElementById("timeFlexPriceLabel").innerHTML = Number(precioIdaVueltaSeleccionado1) + Number(precioIdaVueltaSeleccionado2) + 150 + "€";

        document.getElementById("optimaPrice").value = Number(precioIdaVueltaSeleccionado1) + Number(precioIdaVueltaSeleccionado2) + 90;
        document.getElementById("optimaPriceLabel").innerHTML = Number(precioIdaVueltaSeleccionado1) + Number(precioIdaVueltaSeleccionado2) + 90 + "€";



        //actions
        document.getElementById("basicPrice").addEventListener("click", () => {
            alert(document.getElementById("basicPrice").value)
        })

        document.getElementById("timeFlexPrice").addEventListener("click", () => {
            alert(document.getElementById("timeFlexPrice").value)
        })

        document.getElementById("optimaPrice").addEventListener("click", () => {
            alert(document.getElementById("optimaPrice").value)
        })



    }
})



