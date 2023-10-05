// document.addEventListener("DOMContentLoaded", function () {

//     let now = new Date();

//     console.log(now.getDate()) //del 1 al 31
//     console.log(now.getDay()) //del 0 domingo al 6 sabado
//     console.log(now.getFullYear()) //año con 4 cifras
//     console.log(now.getHours()) //hora
//     console.log(now.getUTCHours()) //hora de londres (-1 hora que españa)

//     //milisegundos dentro de la clase 24 horas X 60 minutos X 60 segundos X 1000 milisegundos
//     let myDate = new Date((24*60*60)*1000); 

//     // alert(myDate);

//     //poner fehcas a partir de una cadena
//     let date = new Date("2023-08-12");
//     // alert(date);


//     //poner numero a numero la fecha
//     //año, mes, dia, hora, minuto, segundo, milisegundo
//     let date2 = new Date(2023, 8, 12, 7, 0, 25,2);

//     // alert(date2);



//     document.getElementById("myBtn").addEventListener("click", function() {
//         // window.close(); //cierra la centana en la que se encuentra
//         // window.open(); 
//         // window.open("vendor/welcome.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
//         // window.open("welcome.html", "_self");


//         //temporizador
//         //cuenta atrás : a los 3 segundos lanza esta funcion
//         // setTimeout(saludo, 3000);

//         //otra manera de escribirlo
//         // setTimeout(function () {
//         //     alert("Hello User!");
//         // }, 3000)


//         //cuenta atras: CADA 3 lanza esta funcion
//         // setInterval(despedida, 5000);



//     })
// })


// function saludo() {
//     alert("Saludo!!!");
// }


// function despedida() {
//     alert("Adiós!!!");
// }



document.addEventListener("DOMContentLoaded", function () {
    // document.getElementById("dia").value = todayDate.getDate();
    // document.getElementById("mes").value = todayDate.getMonth();
    // document.getElementById("anyo").value = todayDate.getFullYear();



    document.getElementById("ver").addEventListener("click", function () {
        //     //año, mes, dia, hora, minuto, segundo, milisegundo
        //     let date2 = new Date(2023, 8, 12, 7, 0, 25,2);

        let valueAnyo = document.getElementById("anyo").value;
        let valueMes = document.getElementById("mes").value;
        let valueDia = document.getElementById("dia").value;


        //salte un error si cualquier de las caja contiene una letra
        if (isNaN(valueDia) || isNaN(valueMes) || isNaN(valueAnyo)) {
            alert("Uno de los datos no contiene un numero");
        } else {

            const fecha = new Date(valueAnyo, (valueMes - 1), valueDia);

            let mesos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            let mes = mesos[fecha.getMonth()];

            let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

            let dia = dias[fecha.getDay()];

            document.getElementById("show-paraghraf").innerHTML =  "Dia " + dia +  " del mes " + mes + " y del año " + valueAnyo;
        }

    })
})