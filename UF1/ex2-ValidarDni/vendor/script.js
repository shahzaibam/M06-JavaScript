//cuando cargue la pagina
// document.addEventListener("DOMContentLoaded", function () {
    //recoger los valores de las cajas
    let patron = /[a-zA-ZñÑ]/;
    var myNum;
    var myLle;
    

    // alert(myNum + "   " + myLle);
    document.getElementById("myNum").addEventListener("blur", function () {

        myNum = document.getElementById("myNum").value;


        //verifico el numero
        if (myNum.length != 8) {

            document.getElementById("errorNumDNI").innerHTML = "Longitud Incorrecta";

            document.getElementById("submitBtn").disabled = true;

            // document.getElementById("myNum").value = "";

        } else if (isNaN(myNum)) {
            document.getElementById("errorNumDNI").innerHTML = "Incorrecto, Solo tiene que contener numeros";

            document.getElementById("myNum").value = "";

            document.getElementById("submitBtn").disabled = true;

        } else {
            document.getElementById("errorNumDNI").innerHTML = "";
            document.getElementById("submitBtn").disabled = false;

        }

    })


    document.getElementById("lletra").addEventListener("blur", function () {

        //verifico la lletra

        myLle = document.getElementById("lletra").value;

        if (myLle.length != 1) {
            document.getElementById("errorLetraDNI").innerHTML = "Longitud Incorrecta";
            document.getElementById("lletra").value = "";

            document.getElementById("submitBtn").disabled = true;


        } else if (!patron.test(myLle)) {
            document.getElementById("errorLetraDNI").innerHTML = "Solo tiene que contener una letra";
            document.getElementById("lletra").value = "";

            document.getElementById("submitBtn").disabled = true;

        } else {
            document.getElementById("errorLetraDNI").innerHTML = "";
            document.getElementById("submitBtn").disabled = false;

        }

    })



    document.getElementById("submitBtn").addEventListener("click", function () {
        if (verificaDNI(myNum, myLle)) {
            document.getElementById("vertader").style.color = "green";
            document.getElementById("fals").style.color = "red";
    
        } else {
            document.getElementById("fals").style.color = "green";
            document.getElementById("vertader").style.color = "red";
    
        }
    })



// })


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
