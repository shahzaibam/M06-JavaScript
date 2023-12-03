document.addEventListener("DOMContentLoaded", () => {
    getTodoList();
    document.getElementById("addTodo").addEventListener("click", addTodo);
})

/**
 * GET TODO LIST WITH XHR
 */
function getTodoList() {
    // Create a new instance of XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Function to handle successful response
    function handleSuccess() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let responseData = JSON.parse(xhr.responseText);
            console.log("GET Con XHR:", responseData);

            // Update the DOM (example: append data to an element with id "tasks")
            let outputElement = document.getElementById("tasks");

            if (responseData.error) {
                outputElement.innerHTML = "Error: " + responseData.message;
            } else if (responseData.results) {
                
                for (let index = 0; index < responseData.results.length; index++) {
                    let item = responseData.results[index].name;

                    let li = document.createElement("li");
                    li.innerHTML = item;

                    outputElement.appendChild(li);
                }
            } else {
                outputElement.innerHTML = "No data received";
            }
        } else {
            console.error("GET Request Failed");
        }
    }

    
    // Function to handle errors
    function handleError() {
        console.error("Error making GET request");
    }

    // Set up event listeners
    xhr.onload = handleSuccess;
    xhr.onerror = handleError;

    // Open a GET request to the specified URL
    xhr.open("GET", "http://localhost:3000/api/todoList");

    // Send the GET request
    xhr.send();
}


////////////////


/**
 * ADD TODO, WITH XHR
 */
function addTodo() {
    let newTask = document.getElementById("new-task").value;

    if (newTask.trim() !== "") {

        let datosInsertar = {
            name: newTask
        };

        // Crear nueva instancia de XMLHttpRequest
        let xhr = new XMLHttpRequest();

        // Función para manejar el éxito
        function exit() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var dades = JSON.parse(xhr.responseText);
                    console.log(dades);
                } else {
                    console.error(`Error ${xhr.status}: ${xhr.statusText}`);
                }
            }
        }


        // Función para manejar errores
        function error() {
            console.log('Tenim errors: ', xhr.statusText);
        }

        // Asignar funciones a los eventos
        xhr.onload = exit;
        xhr.onerror = error;

        // Abrir la conexión y configurar la solicitud
        xhr.open("POST", "http://localhost:3000/api/todoListPost");
        xhr.setRequestHeader("Content-Type", "application/json");

        // Enviar la solicitud con los datos
        xhr.send(JSON.stringify(datosInsertar));
    }

    location.reload();
}