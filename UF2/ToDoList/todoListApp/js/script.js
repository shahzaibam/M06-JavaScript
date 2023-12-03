document.getElementById("addTodo").addEventListener("click", addTodo);


var taskList = document.getElementById('tasks');

fetch('http://localhost:3000/api/todoList')
    .then(response => response.json())
    .then(json => {
        if (json.error) { //comprueba si hay algun error, si lo hay, lo muestra
            console.log(json.message);
        } else {
            //si no hay ningun error crea las opcions dinamicamente y las muestra
            for (let index = 0; index < json.results.length; index++) {

                item = json.results[index].name;

                let li = document.createElement("li");

                li.innerHTML = item;

                taskList.appendChild(li);


            }
        }
    })
    .catch(error => console.log('La solicitud ha fallado:', error));


function addTodo() {
    let newTask = document.getElementById("new-task").value;

    if (newTask.trim() !== "") {

        let datosInsertar = { //SIEMPRE HACER CON OBJETO, EL NOMBRE DE LA PROPIEDAD TIENE QUE SER IGUAL QUE LA DEL CAMPO EN LA BBDD, AUNQUE SEA UN VALOR HACERLO CON OBJETO
            name: newTask
        };

        fetch('http://localhost:3000/api/todoListPost', {
            method: "POST", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(datosInsertar),
        })
            .then(response => response.json())
            .then(responseData => {
                if (responseData.error) {
                    console.log(responseData.error);
                }
            })
            .catch(err => console.log(err));

    }

    location.reload();
}