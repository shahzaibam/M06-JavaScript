let usuarios = ["Ivan", "Shebi", "Piquer"];
let password = ["123", "456", "789"];

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

        for (let index = 0; index < usuarios.length; index++) {
            if (nombreValue == usuarios[index]) {
                if (passwordValue == password[index]) {
                    alert("credenciales correctas");
                    localStorage.setItem("login", true);
                    showLoginTrue();
                    break;
                } else {
                    alert("credenciales incorrectas");
                    break;
                }
            }
        }
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
    //dinamico
    var cursos = ['DAW', 'DAM', 'ASIX'];
    var formulariDiv = document.getElementById('formulari');



    var label = document.createElement('label');
    label.textContent = 'Cursos:';
    formulariDiv.appendChild(label);

    var select = document.createElement('select');
    select.id = 'cursos';

    cursos.forEach(function (curs) {
        var option = document.createElement('option');
        option.value = curs.toLowerCase();
        option.textContent = curs;
        select.appendChild(option);
    });

    formulariDiv.appendChild(select);

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
