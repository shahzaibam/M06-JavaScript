let cadena = "We will, we will rock you";

console.log(cadena.match(/we/ig));


let patron = /will/i


if(patron.test(cadena)) {
    console.log("patron encontrado")
}else {
    console.log("patron no encontrado")
}


//reemplaza el we (i=busca el primer we, g=busca todos los we no importa mayus o minus), lo reemplaza por "You"
console.log(cadena.replace(/we/ig, "You"))

//cuando cargue la página todos los forms estarán en display none, (no se verán)
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "none";
});


//funcion para hacer aparecer el formulario de login
document.getElementById("login-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "block";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "none";
    


    /************************************************************************** */


    // if(document.getElementById("login-div").style.display == "block") {
    //     // console.log("se ve")
    //     document.getElementById("login-div").style.display = "none";
    // }else {
    //     // console.log("no se ve")
    //     document.getElementById("login-div").style.display = "block";
    // }
});

//funcion para hacer aparecer el formulario de register
document.getElementById("register-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "block";
    document.getElementById("booking-div").style.display = "none";



    /************************************************************************** */

    

    // if(document.getElementById("register-div").style.display == "block") {
    //     // console.log("se ve")
    //     document.getElementById("register-div").style.display = "none";
    // }else {
    //     // console.log("no se ve")
    //     document.getElementById("register-div").style.display = "block";
    // }
});

//funcion para hacer aparecer el formulario de booking
document.getElementById("booking-btn").addEventListener("click", () => {


    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "block";


    
    
    /************************************************************************** */


    
    // if(document.getElementById("booking-div").style.display == "block") {
    //     // console.log("se ve")
    //     document.getElementById("booking-div").style.display = "none";
    // }else {
    //     // console.log("no se ve")
    //     document.getElementById("booking-div").style.display = "block";
    // }
});


//Hacer un get de los datos introducidos en los fields del formulario login, y después mostrarlos en un alert.
document.getElementById("loginNowBtn").addEventListener("click", () => {
    
    let email = document.getElementById("email").value;

    let passwd = document.getElementById("password").value;


    document.getElementById("result").innerHTML = "Login Results --> Email : " + email + " ..... Password --> " + passwd;

    // alert("You email is " + email + " and your password is " + passwd)

});



