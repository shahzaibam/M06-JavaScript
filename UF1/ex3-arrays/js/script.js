//Arrays JS
let text = "";

document.addEventListener("DOMContentLoaded", function () {
    let paisos = [
        "França",
        "Portugal",
        "Itàlia",
    ];
    
    //visualitzo tot el array
    console.log(paisos); 

    document.getElementById("resultat").innerHTML = paisos.toString(); //passar array a cadena
    document.getElementById("resultat").innerHTML += " --> " + paisos.length;

    //per veure el array forma 1
    for (let i = 0; i < paisos.length; i++) {
        console.log(paisos[i]);
        
    }

    //per veure el array forma 2
    for(let p in paisos) { //in es para ver el index del array
        console.log(p);
    }

    //per veure el array forma 3
    for(let p of paisos) { //of es para ver el valor del array
        console.log(p);
    }

    //per veure el array forma 4
    text = ""; //cadena vacía

    paisos.forEach(recorregut); //for each solo espera como argumento una funcion
    console.log(text);
    

    //per veure el array forma 5
    //funcions callback associades a Array: forEach, map
    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(operacions);
    console.log(numbers2);


    //todos los valores de paisos a mayúsculas
    let paisos2 = paisos.map(majuscules);
    console.log(paisos2);


    //filtrar edad mayor de 18
    const anys = [23, 3, 2, 43, 56];
    const perSobre = anys.filter(filtreEdat);
    console.log(perSobre);


    //añadir valores nuevos al array sin saber el índice
    paisos.push("Alemania");
    console.log(paisos);


    //quitar el ultimo valor del array
    paisos.pop();
    console.log(paisos);


    //quitar el primer valor del array
    paisos.shift();
    console.log(paisos);


    //añadir un valor en la primera posicion
    paisos.unshift("USA");  
    console.log(paisos);


})



function recorregut(value) {
    text += " " + value  + " ";
}


function operacions(value) {
    return value * 2;
}


function majuscules(value) {
    return value.toUpperCase();
}

function filtreEdat(value) {
    return value>18;
}

