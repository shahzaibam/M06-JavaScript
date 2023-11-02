document.addEventListener("DOMContentLoaded", () => {
    checkYourCookie("accept");
    document.getElementById("aceptarCookiesBtn").addEventListener("click", () => {

        setCookie("accept", "true", 7)
        document.getElementById("cookies").style.display = "none";
        
    })
})


//showTime -> muestra la hora, actualizando cada segundo
function showTime() {
    let date = new Date();
    let dia = date.getDate();

    if (dia < 10) {
        diaMenorDiez = '0' + dia;
    }

    let mes = date.getMonth() + 1; // Sumamos 1 ya que los meses comienzan en 0
    let any = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    document.getElementById("data").innerHTML = diaMenorDiez + "-" + mes + "-" + any + "  " + hora + ":" + minutos + ":" + segundos;
}

showTime();

setInterval(showTime, 1000);


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//get cookie
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
//checkCookie -> mira si existe la cookie
function checkYourCookie(accept) {
    let acceptCookie = getCookie(accept);
    if (acceptCookie != "") {
        document.getElementById("cookies").style.display = "none";
        alert("display none")

      
    } 
    // else {
    //     setCookie("accept", "true", 7)
    //     document.getElementById("cookies").style.display = "none";
    //     alert("display none")

    // }
}





