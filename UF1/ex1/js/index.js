// alert("Hola JavaScript");
var numero = 3;
let nom = "Sara";
const lletra = 'M'
//Alterntivas
// if(numero==3){
//     console.log('Cert');
// }else if(numero==10){
//     console.log('Fals');
// }
// let result = numero == 3 ? "És un 3" : "És un altre número"
// console.log(result);
// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// let j = 3;
// while (j < 3) {
//     alert(j);
// }

// for (let k = 0; k < 3; k++) {
//     console.log(k)
// };

// nom = 'Marc';
// console.log(nom);



// let missatge = "Benvinguts!";

// alert(missatge)

// missatge = 23;

// console.log(typeof "ss")

// console.log(missatge / "hola")

// let age;

// age = prompt("Digue la teva edat", 100);

// console.log(age)


// let result = confirm("Estas segur que vols continuar?");

// console.log(result)

// if(result == true) {
//     age = 34;
// }else {
//     age = 0;
// }

// console.log(age)




//conversions de tipus


// let number = "1"; //és un string
// let suma = Number(number) + 21;
// console.log(suma);




//EXERCICI 1 : FACTORIAL

// let factorial;

// let flag = true;

// do{
//     factorial = prompt("Escribe un numero");

//     if(isNaN(factorial)) {
//         alert("Introduce un numero porfavor")

//     } else {
//         flag=false;
//         //Fem el producte
//         let producte = 1;

//         for (let i=1; i <= factorial; i++) {

//             console.log(producte + " * " + i + " = " + producte*i)

//             producte = producte * i;



//         }
//         console.log(producte)
//     }

// }while(flag);




//FUNCIONES

// let message = "Hallo!";
// function showMessage() {
//     let message = "Hello!";

//     alert(message);
// }


// showMessage();


// alert(message);



// function showMessage() {
//     let message = "Allo!";

//     return message;
// }

// let mensaje = showMessage();

// alert(mensaje);



// function showMessage(message) {
//     return message+" a tots!!";
// }

// let mensaje = showMessage("Hola");

// alert(mensaje);



// function showMessage(message="Bon dia") {
//     return message+" a tots!!";
// }

// let mensaje = showMessage();

// alert(mensaje);




//funcions anonimes

// let salutacio = function (){
//     return "Hola";
// }

// alert(salutacio());


//funcions fletxa

// let salutacio = (message) => {
//     return "Hola array function" + message;
// }

// alert(salutacio(" Saludos"));





//Exercici 2 - agafem 2 valors, validar que son numeros, fer la suma, resta, multiplicacio y divisio



// let flag = true;


// do {

//     let num1 = prompt("Escribe el primer numero");
//     let num2 = prompt("Escribe el segundo numero");

//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("Uno o los dos valores no son correctos")
//     } else {

//         //funcions anònimes
//         //escribirlas antes de llamarlas
//         // let suma = function () {
//         //     return Number(num1) + Number(num2);
//         // }

//         // let resta = function () {
//         //     return num1-num2;
//         // }

//         // let multi = function () {
//         //     return num1*num2;
//         // }

//         // let div = function () {
//         //     return num1/num2;
//         // }


//         //arrow functions
//         let suma =  () => {
//             return Number(num1) + Number(num2);
//         }

//         let resta = () => {
//             return num1-num2;
//         }

//         let multi = () => {
//             return num1*num2;
//         }

//         let div = () => {
//             return num1/num2;
//         }

//         let add = suma(num1, num2);
//         let dif = resta(num1, num2);
//         let prod = multi(num1, num2);
//         let divisio = div(num1, num2);


//         alert("Las operaciones son " + add + " - " + dif + " - " + prod + " - " + divisio);

//         flag = false;

//     }

// } while (flag);






// function sumar(num1, num2) {
//     return Number(num1) + Number(num2); //hay que poner el Number para que lo pase a numero, el prompt recoge las variables como si fueran una cadena.
// }


// function restar(num1, num2) {
//     return (num1 - num2);
// }


// function multiplicar(num1, num2) {
//     return (num1 * num2);
// }


// function divisio(num1, num2) {
//     return num1 / num2;
// }




//DOM
//------------------------------
//getElementById
// document.getElementById("hello").innerHTML = "Hola a tothom"; //inserint texte dins del tag del id #hello.


//getElementsByTagName
// let valors = document.getElementsByTagName("h2");

// console.log(valors)

// console.log(valors[1].innerHTML)


// for (let index = 0; index < valors.length; index++) {
//     console.log(valors[index].innerHTML)
// }



//getElementsByClassName
// let classes = document.getElementsByClassName("intro");

// console.log(classes);


// for (let index = 0; index < classes.length; index++) {
//     classes[index].innerHTML = "Heeyy";

// }


//querySelector
// console.log(document.querySelector("#hello").innerHTML);//accedo al id pero con querySelector


// console.log(document.querySelector(".intro").innerHTML);//accedo a la classe con querySelector


// console.log(document.querySelectorAll(".intro"));//accedo a todos los tags con classe intro


//cuando seleccionamos querySelectorAll, se convierte en un array, pues lo mostramos con for loop
// let intros = document.querySelectorAll(".intro");

// for (let index = 0; index < intros.length; index++) {
//     console.log(intros[index]);

// }


//Acceso a los atributos de los tags
// console.log(document.getElementById("link").href)

//cambiamos el atributo href
// console.log(document.getElementById("link").href = "https://proven.cat")








//Manera alternativa de incrustar una página
//----------------------------------

//el document.write no respeta los tags, aqui este se pone dnd sea, no le hace falta un tag.
// document.write("hello");



//recojo un valor de un formulario

// document.getElementById("myBtn").addEventListener("click", function () {
//     //instrucciones
//     alert(document.getElementById("myText").value)
// })

// document.getElementById("myBtn").addEventListener("click", () => {
//     //instrucciones
//     alert(document.getElementById("myText").value)
// })


// document.getElementById("myBtn").addEventListener("click", myFunction)
// function myFunction(){
//     //instrucciones
//     alert(document.getElementById("myText").value)
// }


// document.getElementById("myText").addEventListener("focus", () => {
//     document.getElementById("myText").style.background = "pink";
//     document.getElementById("myText").style.color = "white";
//     document.getElementById("myText").style.textTransform = "upperCase";
// })

// document.getElementById("myText").addEventListener("blur", () => {
//     document.getElementById("myText").style.background = "white";
//     document.getElementById("myText").style.color = "black";
//     document.getElementById("myText").style.textTransform = "lowerCase";
// })


// document.getElementById("myClear").addEventListener("click", () => {
//     var x = document.getElementById("myText");

//     if(x.style.display == "none") {
//         x.style.display = "block"
//         console.log("block")
//     }else {
//         x.style.display = "none"
//         console.log("none")
//     }
// })




/*************************************** */
//EXPRESIONES REGULARES

let cadena = "We will, we will rock you";

console.log(cadena.match(/we/ig));


let patron = /will/i


if(patron.test(cadena)) {
    console.log("patron encontrado")
}else {
    console.log("patron no encontrado")
}
