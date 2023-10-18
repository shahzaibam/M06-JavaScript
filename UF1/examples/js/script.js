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


document.getElementById("myBtn").addEventListener("click", () => {

    //fills del select en format array
    console.log(document.getElementById("myCities").children); //em dona tots els fills del select
    console.log(document.getElementById("myCities").childNodes);

    //entrem dins del arrays
    console.log(document.getElementById("myCities").children[0].value);
    console.log(document.getElementById("myCities").childNodes[1].value);


    //agafem el primer i el darrer element
    console.log(document.getElementById("myCities").firstChild);
    console.log(document.getElementById("myCities").lastChild.value);

    console.log(document.getElementById("myCities").firstElementChild);
    console.log(document.getElementById("myCities").lastElementChild.value);


    //padre del select
    console.log(document.getElementById("myCities").parentNode);
    console.log(document.getElementById("myCities").parentElement);


    //esborra un node que sigui child de body i que no estigui en cap div si no que estigui directament en el tag body
    document.body.removeChild(document.getElementById("paragraf1"));

    //esborrar un node assenyalat amb el id
    document.getElementById("paragraf2").remove();

})


// element.innerHTML= "Texte des de javascript";


// let paragraf = document.createElement("p"); //crear la etiqueta <p>

// //un cop creat puc arribar als seus atributs
// paragraf.innerHTML = "Aquest es el meu paragraf";
// paragraf.style.color = "red"
// paragraf.style.background = "blue"
// paragraf.id = "myPara"


// element.appendChild(paragraf);


