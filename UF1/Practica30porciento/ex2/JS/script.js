let nomExercici2 = [];

//valida lo que hay en el input, si es mayor de 3 y es un numero, lo añade, si son palabras no lo añade, si el valor del select es Inici lo añade al inicio con el metodo unshift(), si el valor del select es final añade el valor al final del array con el metodo push().
document.getElementById("inputValue").addEventListener("blur", () => {
    let inputValue = document.getElementById("inputValue").value;

    let insertarPlace;

    if (document.getElementById("optionsAfegir").value == "Inici") {
        insertarPlace = "Inici";
    }else {
        insertarPlace = "Final";
    }

    if(!isNaN(inputValue)) { 
        if(inputValue.length>=3) {

            if(insertarPlace == "Inici") {

                nomExercici2.unshift(inputValue);

                document.getElementById("arrayValorsNeg").innerHTML = inputValue + " valor añadido";
    
                console.log(nomExercici2);
            }else {

                nomExercici2.push(inputValue);

                document.getElementById("arrayValorsNeg").innerHTML = inputValue + " valor añadido";
    
                console.log(nomExercici2);
            }

        }else{
            console.log(inputValue);
            document.getElementById("arrayValorsNeg").innerHTML += "Valor negativo no cumple "+  inputValue + "<br>";


        }
    }else {
        console.log(inputValue);
        document.getElementById("arrayValorsNeg").innerHTML += "Valor negativo no cumple "+  inputValue + "<br>";

    }

    document.getElementById("arrayValors").innerHTML = nomExercici2;
})


