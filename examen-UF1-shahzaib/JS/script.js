//array de artciles
let articles = ["Sport clothes", "Sneakers"];

let selectArticles = document.getElementById("selectArticles");
let numberArticles = document.getElementById("numberOfArticles");
let inputErrorMessage = document.getElementById("inputErrorMessage");
let btnIntroduceArt = document.getElementById("btnIntroduceArt");

//array de clothes
let productsClothes = ["Chicago Bulls T-Shirt", "Chicago Bulls Pants", "Nike T-Shirt", "Nike Pants"]; //4
//array de sneakers
let productsSneakers = ["Air Jordan Sneakers", "Nike Air Sneakers", "Adidas Sneakers", "Puma Sneakers"]; //4

let form_2 = document.getElementById("form-2-div");

let prodSeleccionados = [];


//form 1 ---------------------------------------

//mostro el primer formulari recorrent els articles i creant les etiquetes (HTML) dinamicament.
//faig les validacions, si tot está bé el boto es fará enable.
for (let index = 0; index < articles.length; index++) {
    let option = document.createElement("option");

    option.value = articles[index];
    option.innerHTML = articles[index];

    selectArticles.appendChild(option);

}

let default_select_article = selectArticles.value;

selectArticles.addEventListener("change", () => {
    console.log(selectArticles.value)
})


numberArticles.addEventListener("blur", () => {

    let flag = false;

    if (!(numberArticles.value)) {
        inputErrorMessage.innerHTML = "porfavor escribe el numero de articulos";
        inputErrorMessage.style.color = "red";
    } else {

        if (isNaN(numberArticles.value) || !(numberArticles.value % 1 == 0)) {
            inputErrorMessage.innerHTML = "porfavor escribe un numero entero";
            inputErrorMessage.style.color = "red";
        } else {
            inputErrorMessage.innerHTML = "";
            inputErrorMessage.style.color = "";

            flag = true;
        }

    }


    if (flag) {
        btnIntroduceArt.disabled = false;
    } else {
        btnIntroduceArt.disabled = true;
    }

})




//form 2 ---------------------------------------

//aquesta funcio mostra el form 2 y fa un display none al primer form, i pregunta quins articles volem seleccionar, clothes o sneakers. 
//Segons seleccionat veurem diferents productes, tots el productes seleccionats es guarden en un array. 
//Creo tots els elements dinàmicament
btnIntroduceArt.addEventListener("click", () => {

    // if (document.getElementById("form-1").style.display == "block") {

    document.getElementById("form-1").style.display = "none";
    document.getElementById("form-2").style.display = "block";
    // }



    if (selectArticles.value == "Sport clothes") {
        console.log("sports")
        for (let index = 0; index < productsClothes.length; index++) {
            let div_form_group = document.createElement("div");
            let input = document.createElement("input");
            let checkBox = document.createElement("input");

            div_form_group.className = "form-group";

            input.value = productsClothes[index];
            input.innerHTML = productsClothes[index];
            input.readOnly = true;

            checkBox.type = "checkbox";
            checkBox.value = productsClothes[index];
            checkBox.id = "articlesCheckbox" + [index + 1];




            div_form_group.appendChild(input);
            div_form_group.appendChild(checkBox);

            form_2.appendChild(div_form_group);

        }



        for (let index = 0; index < productsClothes.length; index++) {

            document.getElementById("articlesCheckbox" + (index + 1)).addEventListener("change", () => {

                if (document.getElementById("articlesCheckbox" + (index + 1)).checked) {

                    prodSeleccionados.push(document.getElementById("articlesCheckbox" + (index + 1)).value);

                    console.log(prodSeleccionados);


                }

            })


        }



    } else if (selectArticles.value == "Sneakers") {

        console.log("sneakers")
        for (let index = 0; index < productsSneakers.length; index++) {
            let div_form_group = document.createElement("div");
            let input = document.createElement("input");
            let checkBox = document.createElement("input");

            div_form_group.className = "form-group";

            input.value = productsSneakers[index];
            input.innerHTML = productsSneakers[index];
            input.readOnly = true;

            checkBox.type = "checkbox";
            checkBox.value = productsSneakers[index];
            checkBox.id = "articlesCheckbox" + [index + 1];




            div_form_group.appendChild(input);
            div_form_group.appendChild(checkBox);

            form_2.appendChild(div_form_group);

        }



        for (let index = 0; index < productsSneakers.length; index++) {

            document.getElementById("articlesCheckbox" + (index + 1)).addEventListener("change", () => {

                if (document.getElementById("articlesCheckbox" + (index + 1)).checked) {

                    prodSeleccionados.push(document.getElementById("articlesCheckbox" + (index + 1)).value);

                    console.log(prodSeleccionados);


                }
                
                // else {

                //     let unchecked = document.getElementById("articlesCheckbox" + (index + 1)).value;

                //     alert(unchecked)

                //     // let findIndex = productsSneakers.findIndex(() => { return unchecked });
                //     let findIndex = productsSneakers.indexOf(unchecked);

                //     alert(productsSneakers[findIndex]);

                //     let x = productsSneakers.slice(findIndex, 1);

                //     console.log(x)

                //     // alert(productsSneakers.find("Nike Pants"));

                    
                // }

            })


        }
    }

})


// document.getElementById("info").innerHTML = "Solo puedes seleccionar " + numberArticles.value + " articulos";



//si premem el botó de prepare invoice ens preguntará si volem fer ho (confirmacio), si li diem que no, no fará res, pero si li diem que si fará la funcio showSeleccionados(prodSeleccionados); 
//prodSeleccionados es l'Array on es guarden els productes seleccionats
document.getElementById("prepare-invoice").addEventListener("click", () => {

    // console.log(numberArticles.value);
    // console.log(prodSeleccionados.length)


    if (prodSeleccionados.length != numberArticles.value) {
        document.getElementById("errorArticlesLength").innerHTML = "El valor seleccionado es mayor";
        document.getElementById("errorArticlesLength").style.color = "red";
    } else {
        document.getElementById("errorArticlesLength").innerHTML = "";


        if (window.confirm("Quieres hacer el invoice?")) {
            showSeleccionados(prodSeleccionados);
        } else {
            alert("no confirmado")
        }


    }

})


//si prem el botó de cancelar, la página es refresca i torna al inici
document.getElementById("cancel").addEventListener("click", () => {
    location.reload();
})



//aquesta funcio fa un display none del formulari 2 i un display block del formulari 3 i també recorreix el array seleccionat i mostra els items, hi ha dos botons de tancar i imprimir.
function showSeleccionados(prodSeleccionados) {
    let form_3 = document.getElementById("form-3");
    let form_3_div = document.getElementById("form-3-div");

    document.getElementById("form-2").style.display = "none";
    form_3.style.display = "block";


    for (let index = 0; index < prodSeleccionados.length; index++) {
        let createP = document.createElement("p");


        createP.innerHTML = prodSeleccionados[index];

        form_3_div.appendChild(createP);

    }

    document.getElementById("tancar").addEventListener("click", () => {
        // let openedWindow;

        window.close();
    })



    document.getElementById("imprimir").addEventListener("click", () => {
        // let openedWindow;

        window.print();
    })

}



// document.getElementById("articlesCheckbox0").addEventListener("click", () => {

//     alert(checkBoxId)

//     // for (let index = 0; index < productsClothes.length; index++) {

//     //     let prodSeleccionados = [""];


//     //     if(document.getElementById("articlesCheckbox"+[index+1]).checked) {
//     //         prodSeleccionados.push(document.getElementById("articlesCheckbox"+[index+1]).value);
//     //     }


//     // }

//     // console.log(prodSeleccionados)

//     // alert(document.getElementById("articlesCheckbox"+[index]).value)
// })



// let prodSeleccionados = [""];
// function clickCheckbox(index) {



//     document.getElementById("articlesCheckbox" + [index]).addEventListener("click", () => {


//         if (document.getElementById("articlesCheckbox" + [index]).checked) {
//             alert("hola")
//             prodSeleccionados.push(document.getElementById("articlesCheckbox" + [index]).value);
//         }

//         // alert(document.getElementById("articlesCheckbox"+[index]).value)
//     })

// }



