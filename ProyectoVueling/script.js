
//funcion para hacer aparecer y desaparecer el formulario de login
document.getElementById("login-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "block";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "none";
    

    // if(document.getElementById("login-div").style.display == "block") {
    //     // console.log("se ve")
    //     document.getElementById("login-div").style.display = "none";
    // }else {
    //     // console.log("no se ve")
    //     document.getElementById("login-div").style.display = "block";
    // }
})

//funcion para hacer aparecer y desaparecer el formulario de register
document.getElementById("register-btn").addEventListener("click", () => {

    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "block";
    document.getElementById("booking-div").style.display = "none";
    
    // if(document.getElementById("register-div").style.display == "block") {
    //     // console.log("se ve")
    //     document.getElementById("register-div").style.display = "none";
    // }else {
    //     // console.log("no se ve")
    //     document.getElementById("register-div").style.display = "block";
    // }
})

//funcion para hacer aparecer y desaparecer el formulario de booking
document.getElementById("booking-btn").addEventListener("click", () => {


    document.getElementById("login-div").style.display = "none";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("booking-div").style.display = "block";
    
    // if(document.getElementById("booking-div").style.display == "block") {
    //     // console.log("se ve")
    //     document.getElementById("booking-div").style.display = "none";
    // }else {
    //     // console.log("no se ve")
    //     document.getElementById("booking-div").style.display = "block";
    // }
})


//Hacer un get de los datos introducidos en los fields del formulario login, y después mostrarlos en un alert.
document.getElementById("loginNowBtn").addEventListener("click", () => {
    
    let email = document.getElementById("email").value;

    let passwd = document.getElementById("password").value;

    alert("You email is " + email + " and your password is " + passwd)

})