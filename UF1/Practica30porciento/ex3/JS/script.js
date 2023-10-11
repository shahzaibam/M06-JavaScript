document.getElementById("validar").addEventListener("click", function () {
    let patron = /[0-9]/;
    let nom = document.getElementById("name").value;
    let fecha = document.getElementById("fecha").value;

    if (nom === "") {
        document.getElementById("errorMessageName").innerHTML = "No puede estar el campo nombre vacio"
    } else if (fecha === "") {
        document.getElementById("errorMessageDate").innerHTML = "No puede estar el campo fecha vacio"

    } else {

        document.getElementById("errorMessageName").innerHTML = "";
        document.getElementById("errorMessageDate").innerHTML = ""


    }

    if (nom.length < 3) {
        document.getElementById("errorMessageName").innerHTML = "Tiene que tener más de 3 letras"

    } else if (nom.length > 20) {

        document.getElementById("errorMessageName").innerHTML = "Tiene que tener 20 letras como máximo"

    } else {

        document.getElementById("errorMessageName").innerHTML = "";

    }

    if (!isNaN(nom)) {
        document.getElementById("errorMessageName").innerHTML = "Tu nombre no puede ser un número"
    } else if (patron.test(nom)) {
        document.getElementById("errorMessageName").innerHTML = "Esto no es un nombre válido";

    } else {

        document.getElementById("errorMessageName").innerHTML = "";

    }
    let anio = fecha.slice(0, 4);  // Obtiene los primeros cuatro caracteres (el año)
       // Obtiene los últimos dos caracteres (el día)

       let totalAnio = (Number(anio)+150);
        
       console.log(totalAnio);

       if(anio>totalAnio) {
        document.getElementById("errorMessageDate").innerHTML = "Es un año erroneo"

       }
   
});