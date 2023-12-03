// let xhr = new XMLHttpRequest();

// //abro la conecion
// //delcaro el recurso y el metodo de acceso "POST"
// xhr.open("POST", "http://localhost:3000/api/login");

// //Envío la solicitud de la red
// xhr.send();


// // 4. Esto se llamará después de que la respuesta se reciba
// xhr.onload = function () {
//     if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
//         alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
//     } else { // muestra el resultado
//         alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
//     }
// };

// // xhr.onprogress = function (event) {
// //     if (event.lengthComputable) {
// //         alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
// //     } else {
// //         alert(`Recibidos ${event.loaded} bytes`); // sin Content-Length
// //     }

// // };

// // xhr.onerror = function () {
// //     alert("Solicitud fallida");
// // };


// //objecte JS
// let data = {
//     username: "daw2",
//     userpass: "2021 "
// };

// // funció per a quan hi ha èxit
// function exit() {

//     var dades = JSON.parse(this.responseText);// recollim les dades
//     // console.log(dades);



//     // if (dades.error) {
//     //     document.getElementById("message").innerHTML = "Hi ha un error amb la teva consulta";
//     // } else {
//     //     document.getElementById("message").innerHTML = dades.message;
//     //     alert("no hi ha error")

//     //     document.getElementById("message").innerHTML = dades.resultats; <-- això noooo

//     //     for (let index = 0; index < dades.resultats.length; index++) {
//     //         document.getElementById("message").innerHTML = "Username --> " + dades.resultats[index].username + "<br>";
//     //         document.getElementById("message").innerHTML += "Password --> " + dades.resultats[index].userpass;
//     //     }
//     // }
// }

// // funció per a quan hi ha error
// function error() {

//     console.log('Tenim errors: ', err);

// }

// // var xhr = new XMLHttpRequest();//invocar nueva instancia de XMLHttpRequest

// xhr.onload = exit; //cridar a la funció d'èxit quan tot va bé

// xhr.onerror = error; //cridar a la funció d'error quan hi ha fallida

// xhr.open('POST', 'http://localhost:3000/api/login'); //obrim la sol·licitud

// xhr.send(JSON.stringify(data)); //enviem la sol·licitud




//EXEMPLE BÀSIC DE FETCH

//PER GET AL SERVIDOR
// fetch('https://api.github.com/users/manishmshiva')
//     // Exito
//     .then(response => response.json())  // convertir a json
//     .then(json => console.log(json))    //imprimir los datos en la consola
//     .catch(err => console.log('Solicitud fallida', err)); // Capturar errores


// fetch('https://api.github.com/users/manishmshiva', {
// method: "GET",
// headers: {"Content-type": "application/json;charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => console.log(json))
// .catch(err => console.log(err));


// datos mandados con la solicutud POST
// let _datos = {
//     titulo: "foo",
//     principal: "bar", 
//     Id:1
//   }

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify(_datos),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
//   })
//   .then(response => response.json()) 
//   .then(json => console.log(json))
//   .catch(err => console.log(err));


fetch('http://localhost:3000/api/login')
    .then(response => response.json())
    .then(json => {
        if (json.error) {
            document.getElementById("message").innerHTML = json.message;
        } else {

            for (let index = 0; index < json.results.length; index++) {
                document.getElementById("message").innerHTML = "Username (FETCH) --> " + json.results[index].username + "<br>";
                document.getElementById("message").innerHTML += "Password (FETCH) --> " + json.results[index].userpass;
            }
        }
    })
    .catch(error => console.log('La solicitud ha fallado:', error));




//POST
// !!!!!! si no deja insertar y da error, es por la primary key, el nombre no se puede repetir !!!!!

//objeto con usuarios para mandar
let datosInsertar = {
    username: "ibby_8",
    userpass: "12345"
};

fetch('http://localhost:3000/api/login', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosInsertar),
})
    .then(response => response.json())
    .then(responseData => {
        if (responseData.error) {
            document.getElementById("message").innerHTML = responseData.message;
        } else {
            document.getElementById("message").innerHTML += "<br><br>Username insertado (FETCH) --> " + datosInsertar.username + "<br>";
            document.getElementById("message").innerHTML += "Password insertado (FETCH) --> " + datosInsertar.userpass;
        }
    })
    .catch(err => console.log(err));

