///EJERCICIO 1-----------------------------------

var hora;

document.getElementById("iniciarBtn").addEventListener("click", () => {
    hora = setInterval(updateHour, 1000);
})

document.getElementById("pararBtn").addEventListener("click", () => {

    stopHour(hora);
    let horaParada = document.getElementById("hora").innerHTML += "";
    document.getElementById("hora").style.display = "none";

    console.log(horaParada);

    let fechaActual = fechaHoy();

    document.getElementById("fechaHoy").innerHTML += fechaActual;
    document.getElementById("fechaHoy").innerHTML += horaParada;
    // document.getElementById("hora").style.display = "block";




})


function updateHour() {
    let fecha = new Date();

    let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("hora").innerHTML = hora;

    return fecha;
}


function stopHour(hora) {
    clearInterval(hora);

    return hora;
}


function fechaHoy() {
    const fecha = new Date();

    let mesos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let mes = mesos[fecha.getMonth()];

    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let dia = dias[fecha.getDay()];

    let diaNum = fecha.getDate();

    let valueAnyo = fecha.getFullYear();

    let fechaTexto =   dia + " dia " +  diaNum + " de " + mes + " y del año " + valueAnyo + ",  ";

    return fechaTexto;
}



//EJERCICIO 2--------------------------







