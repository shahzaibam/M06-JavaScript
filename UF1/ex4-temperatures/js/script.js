//cuando cargue la pagina
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myBtn").addEventListener("click", function () {

        let temperaturas = [];

        for (let i = 1; i <= 10; i++) {

            if (isNaN(document.getElementById("temp" + i).value)) {
                
                document.getElementById("temp" + i).value = "";
                // temperaturas.push(document.getElementById("temp" + i).value);
                // alert("Hay que introducir temperaturas!!!!");

                // document.getElementById("error"+i).hidden = false;

            } else {
                temperaturas.push(document.getElementById("temp" + i).value);
                // document.getElementById("error"+i).hidden = true;

            }

        }

        //recorro temperaturas

        let contadores=[]; //contendra las repeticiones de cada temperatura

        let unicasTemp = []; //contendra todas las temperaturas

        for (let i = 0; i <temperaturas.length; i++) {
            
            if(unicasTemp.includes(temperaturas[i])) {
                // alert("Ya tengo la temperatura")
                //averiguar en que posicion está temperaturas[i] dentro de unicasTemp

                let posicio = unicasTemp.indexOf(temperaturas[i]);
                contadores[posicio] +=1;

            }else {
                unicasTemp.push(temperaturas[i]);
                contadores.push(1);
            }
            
        }
        console.log(unicasTemp);
        console.log(contadores);
        console.log("Las temperaturas repetidas son : ");

        for (let i = 0; i < contadores.length; i++) {

            if(contadores[i]>1){
                console.log(unicasTemp);
            }
            
        }


    })
})