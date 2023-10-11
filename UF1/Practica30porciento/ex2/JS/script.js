let nomExercici2 = [];

let posicioInici = document.getElementById("optionsAfegir").value;

let posicioFinal = document.getElementById("finalOption").value;

//valida lo que hay en el input, si es mayor de 3 lo añade y si son numeros, si son palabras no lo añade
document.getElementById("inputValue").addEventListener("blur", () => {
    let inputValue = document.getElementById("inputValue").value;


    if(!isNaN(inputValue)) {
        if(inputValue.length>=3) {
            nomExercici2.push(inputValue);

            document.getElementById("arrayValorsNeg").innerHTML = inputValue + " valor añadido";

            console.log(nomExercici2);
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


