document.addEventListener("DOMContentLoaded", () => {

    let btnListar = document.getElementById("llistar-btn");
    let btnAfegir = document.getElementById("afegir-btn");
    let btnEliminar = document.getElementById("eliminar-btn");
    let btnShowLocalStorage = document.getElementById("showLocalStorage");

    let taskList = document.getElementById("tableList");
    let afegirForm = document.getElementById("afegirForm");
    let eliminarShow = document.getElementById("showEliminar");


    //antes que todo llamo a la funcion del localstorage para que coga los valores
    dataLocalStorage();

    fetch('http://localhost:3000/api/zoo')
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                console.log(json.message);
            } else {
                let table = document.createElement('table'); //creo una tabla con el createElement
                let thead = document.createElement('thead'); //creo un thead con el createELement
                let tr = document.createElement('tr'); //creo el tr con el createElement
                let tbody = document.createElement('tbody'); //creo el tbody con el createELement

                let headers = ['Id', 'Especie', 'Sexe', 'Any de Naixement', 'País', 'Continent']; //los headers los guardo en un array para imprimirlos con un loop

                table.classList.add('table', 'table-striped'); //le pongo la clase de table-striped para que sea más visible cada row

                /**
                 * recorro el array de headers para añadir los nombres de los campos
                 */
                headers.forEach(function (headerText) {
                    let th = document.createElement('th');
                    th.innerHTML = headerText;
                    tr.appendChild(th);
                });

                thead.appendChild(tr);
                table.appendChild(thead);



                /**
                 * como los resultados que me llegan es un objeto pues lo recorro con un map porque lo quiero hacer para cada valor que haya dentro
                 */
                json.results.map(datosLlegados => {
                    let tr = document.createElement('tr');

                    Object.values(datosLlegados).forEach(valor => {
                        let td = document.createElement('td');
                        td.textContent = valor;
                        tr.appendChild(td);
                    });

                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                taskList.appendChild(table);
            }
        })
        .catch(error => console.log('La solicitud ha fallado:', error));


    /**
     * cuando pulso en listar, me lista los valores de las tablas, y me hace hide de afegirForm y eliminarShow
     */
    btnListar.addEventListener("click", () => {
        taskList.style.display = "block";
        afegirForm.style.display = "none";
        eliminarShow.style.display = "none";
    });

    /**
     * cuando pulso en Afegir, me muestra el formulario, y me hace hide de taskList y eliminarShow
     */
    btnAfegir.addEventListener("click", () => {
        taskList.style.display = "none";
        afegirForm.style.display = "block";
        eliminarShow.style.display = "none";

    });


    /**
     * cuando pulso en Eliminar, me muestra la tabla para poder eliminar, y me hace hide de taskList y afegir
     */
    btnEliminar.addEventListener("click", () => {

        taskList.style.display = "none";
        afegirForm.style.display = "none";
        eliminarShow.style.display = "block";

        showEliminarTabla();

    })


    btnShowLocalStorage.addEventListener("click", () => {
        // Display local storage data in the console
        console.log(JSON.parse(localStorage.getItem('animals')));
    });


    let cookieContador = getCookie("contador");



    if (cookieContador != "") {
        cookieContador++;
        setCookie("contador", cookieContador, 7);
    } else {
        setCookie("contador", 1, 7);

    }

    // // Ver la cookie en la pagina
    let verCookie = document.getElementById("verCookie");

    if(cookieContador == 0) {
        verCookie.innerHTML = "Valor de la cookie: 1";

    }else {
        verCookie.innerHTML = "Valor de la cookie: " + cookieContador;
    }



    if (cookieContador > 10) {
        // Si es así, crea un botón "Eliminar cookie"
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Eliminar cookie";
        deleteButton.onclick = function () {
            // Elimina la cookie
            document.cookie = "contador=; path=/;";

            // Oculta el botón
            deleteButton.style.display = "none";
        };
        document.body.appendChild(deleteButton);
    }


});

/**
 * esta funcion muestra el apartado de eliminar filas en la tabla, hace un fetch al api/zoo y a la hora de imprimirlo le añade los botones de eliminar tambien
 */
function showEliminarTabla() {

    let eliminarShow = document.getElementById("showEliminar");


    fetch('http://localhost:3000/api/zoo')
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                console.log(json.message);
            } else {
                let table = document.createElement('table'); //creo una tabla con el createElement
                let thead = document.createElement('thead'); //creo un thead con el createELement
                let tr = document.createElement('tr'); //creo el tr con el createElement
                let tbody = document.createElement('tbody'); //creo el tbody con el createELement

                let headers = ['Id', 'Especie', 'Sexe', 'Any de Naixement', 'País', 'Continent']; //los headers los guardo en un array para imprimirlos con un loop

                table.classList.add('table', 'table-striped'); //le pongo la clase de table-striped para que sea más visible cada row

                /**
                 * recorro el array de headers para añadir los nombres de los campos
                 */
                headers.forEach(function (headerText) {
                    let th = document.createElement('th');
                    th.innerHTML = headerText;
                    tr.appendChild(th);
                });

                thead.appendChild(tr);
                table.appendChild(thead);

                /**
                 * como los resultados que me llegan es un objeto pues lo recorro con un map porque lo quiero hacer para cada valor que haya dentro
                 */
                json.results.map(datosLlegados => {
                    let tr = document.createElement('tr');

                    Object.values(datosLlegados).forEach(valor => {
                        let td = document.createElement('td');
                        td.textContent = valor;
                        tr.appendChild(td);

                    });

                    tbody.appendChild(tr);


                    // el boton de eliminar lo añado a cada fila
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Eliminar';
                    deleteBtn.addEventListener('click', () => deleteAnimal(datosLlegados.id)); //aqui le llamo pasando el id del animal a eliminar

                    let tdDelete = document.createElement('td');
                    tdDelete.appendChild(deleteBtn);

                    tr.appendChild(tdDelete);
                    tr.setAttribute('data-animal-id', datosLlegados.id); // el atributo data-animal-id, contendra todos los ids de los animales, osea el leon tendra como data-animal-id 1

                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                eliminarShow.appendChild(table);
            }
        })
        .catch(error => console.log('La solicitud ha fallado:', error));
}





function deleteAnimal(animalId) {
    fetch(`http://localhost:3000/api/zoo/${animalId}`, { //aqui llamo a la url con el id del animal a eliminar
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                // esto cogera el data-animal-id que es un parametro que he deficnido yo, le pasare el id del animal, y la consulta del servidor lo eliminara
                let rowElement = document.querySelector(`[data-animal-id="${animalId}"]`);
                if (rowElement) {
                    rowElement.remove();
                } else {
                    console.error('Row element no se ha podiod encontrar');
                }
            } else {
                console.error('Error en el servidor');
            }
        })
        .catch(error => console.error('Error during deletion:', error));

    location.reload(); //cada vez que elimine, va a recargar asi que automaticamente la pagina recargara y el localstorage recogera su nuevo valor
}





function dataLocalStorage() {
    fetch("http://localhost:3000/api/zoo")
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                console.log(json.message);
            } else {
                // Update LocalStorage with the latest data
                localStorage.setItem('animals', JSON.stringify(json.results));
            }
        })
        .catch(error => console.log('La solicitud ha fallado:', error));
}




function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}




function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}