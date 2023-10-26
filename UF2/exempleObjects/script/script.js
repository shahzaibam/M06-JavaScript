//crea  un objecte

let user = {
    name: "Sofia",
    age: 23
};

document.getElementById("resultados").innerHTML = user.name;
user.name = "Shah Zaib";
document.getElementById("resultados").innerHTML = user.name;
user["age"] = 19;
document.getElementById("resultados").innerHTML += " " + user.age;
console.log(user);



let user2 = JSON.stringify(user); //passem user a cadena i ho guardem en una variable user2
console.log(user2) //ara user 2 es un string



let numbers = "[0, 1, 2, 3]"; //suposem que aquest valor ha vingut des del backend PHP
console.log(numbers) //abans de fer el JSON.parse(), será format cadena
numbers = JSON.parse(numbers); //fem el JSON.parse()
console.log(numbers) //després de haber fet el JSON.parse() será format number



//vull passar la cadena user 2 a objecte
let user3 = JSON.parse(user2); //passará de cadena a objecte
console.log(user3) //ara es un objecte

//classe JS . Un dels mètodes de la classe passara a objecte JS
