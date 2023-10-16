let element = document.getElementById("myDiv");
let select = document.getElementById("myCities");

let ciutats = ["Barcelona", "Girona", "Tarragona", "Lleida", "Valencia"];
//com faria per tenir aquestes ciutats penjant del select que esta dins del html

for (let index = 0; index < ciutats.length; index++) {
    let option= document.createElement("option");

    option.value=ciutats[index];

    option.innerHTML=ciutats[index];

    select.appendChild(option);
    
}


// element.innerHTML= "Texte des de javascript";


// let paragraf = document.createElement("p"); //crear la etiqueta <p>

// //un cop creat puc arribar als seus atributs
// paragraf.innerHTML = "Aquest es el meu paragraf";
// paragraf.style.color = "red"
// paragraf.style.background = "blue"
// paragraf.id = "myPara"


// element.appendChild(paragraf);


