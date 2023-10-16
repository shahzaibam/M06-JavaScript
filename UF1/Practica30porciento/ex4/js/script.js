
//ejercicio de contar en directo las palabras, vocales
document.getElementById("textoArea").addEventListener("input", () => {
    console.log(document.getElementById("textoArea").value);

    let texto = document.getElementById("textoArea").value;

    let vocales = 0;

     

    for (let index = 0; index < texto.length; index++) {
        if (texto[index] == "a") {
            vocales++;
        }else if (texto[index] == "e") {
            vocales++;
        }else if (texto[index] == "i") {
            vocales++;
        }else if (texto[index] == "o") {
            vocales++;
        }else if (texto[index] == "u") {
            vocales++;
        }

        console.log("numero de vocales " + vocales);
        console.log("longitud del texto " + texto.length);
    }

}) 