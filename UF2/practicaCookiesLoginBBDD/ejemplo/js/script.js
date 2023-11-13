document.addEventListener("DOMContentLoaded", () => {
    checkYourCookie("accept");

    document.getElementById("aceptarCookiesBtn").addEventListener("click", () => {
        setCookie("accept", "true", 7);
        document.getElementById("cookies").style.display = "none";
    });

    showTime();
    setInterval(showTime, 1000);

    document.getElementById("submitBtn").addEventListener("click", () => {
        let nombreValue = document.getElementById("nombre").value;
        let passwordValue = document.getElementById("password").value;

        //POST
        fetch('http://localhost:3000/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre: nombreValue, contrasena: passwordValue }),
        })
            .then(response => response.json())
            .then(responseData => {
                if (responseData.error) {
                    alert(responseData.message);
                } else {
                    if (responseData.results && responseData.results.length > 0) {
                        alert("Credenciales correctas");
                        localStorage.setItem("login", true);
                        showLoginTrue();
                    } else {
                        alert("Credenciales incorrectas");
                    }
                }
            })
            .catch(err => console.log('La solicitud ha fallado:', err));
    });

    let logOutBtn = document.getElementById("logOutBtn");
    logOutBtn.addEventListener("click", () => {
        localStorage.setItem("login", false);
        showLoginFalse();
    });

    let logged = localStorage.getItem("login");
    if (logged === "true") {
        showLoginTrue();
    } else {
        showLoginFalse();
    }
});


function showLoginTrue() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("logOutDiv").style.display = "block";



    var formulariDiv = document.getElementById('formulari');

    var label = document.createElement('label');
    label.textContent = 'Cursos:';
    formulariDiv.appendChild(label);

    var select = document.createElement('select');
    select.id = 'cursos';

    //GET
    fetch('http://localhost:3000/api/login/cursos')
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                document.getElementById("formulari").innerHTML = json.message;
            } else {
                console.log(json.results);

                for (let index = 0; index < json.results.length; index++) {
                    var option = document.createElement('option');
                    option.value = json.results[index].curso.toLowerCase();
                    option.textContent = json.results[index].curso;
                    select.appendChild(option);
                }

                // Agregar el elemento select al formulariDiv después de haber creado todas las opciones
                formulariDiv.appendChild(select);
            }
        })
        .catch(error => console.log('La solicitud ha fallado:', error));

    formulariDiv.style.display = 'block';
    document.getElementById('formulari').style.display = "block";

}

function showLoginFalse() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("logOutDiv").style.display = "none";
    document.getElementById('formulari').style.display = "none";
}

function showTime() {
    let date = new Date();
    let dia = date.getDate();
    let diaMenorDiez;

    let mes = date.getMonth() + 1;
    let any = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    if (dia < 10) {
        diaMenorDiez = '0' + dia;
        document.getElementById("data").innerHTML = diaMenorDiez + "-" + mes + "-" + any + "  " + hora + ":" + minutos + ":" + segundos;
    } else {
        document.getElementById("data").innerHTML = dia + "-" + mes + "-" + any + "  " + hora + ":" + minutos + ":" + segundos;
    }
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

function checkYourCookie(accept) {
    let acceptCookie = getCookie(accept);

    if (acceptCookie != "") {
        document.getElementById("cookies").style.display = "none";
        document.getElementById("nombre").readOnly = false;
        document.getElementById("password").readOnly = false;
        document.getElementById("submitBtn").disabled = false;
    }
}
