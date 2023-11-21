$("#mySubmit").click(() => {
    let nombreVal = $("#nombre").val();
    let DNIVal = $("#dni").val();
    let edadVal = $("#edad").val();

    let valores = validarDatos(nombreVal, DNIVal, edadVal);

    
    
    if(valores) {
        const mensaje = `Nombre: ${nombreVal}, DNI: ${DNIVal}, Edad: ${edadVal}`;
        $('#datos').text(mensaje).css('color', 'green');
    }
    
});

function validarDatos(nombreVal, DNIVal,edadVal ) {

    let okNombre = false;
    let okDni = false; 
    let okEdad = false;

    var patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    var patronDNI = /^[0-9]{8}[TtRrWwAaGgMmYyFfPpDdXxBbNnJjZzSsQqVvHhLlCcKkEeTt]$/;
    var patronEdad = /^\d+$/;

    let allGood;


    if (patronNombre.test(nombreVal)) {
        okNombre = true;
        $('#mensajeNombre').hide();
    } else {
        $('#mensajeNombre').show();
        $('#mensajeNombre').text('Nombre inválido').css('color', 'red');
    }



    if (patronDNI.test(DNIVal)) {
        okDni = true;
        $('#mensajeDni').hide();
    } else {
        $('#mensajeDni').show();
        $('#mensajeDni').text('DNI inválido').css('color', 'red');
    }


    if (patronEdad.test(edadVal)) {
        $('#mensajeEdad').hide();
        okEdad = true;
    } else {
        $('#mensajeEdad').show();
        $('#mensajeEdad').text('Edad inválida').css('color', 'red');
    }


    if(okNombre && okEdad && okDni) {
        allGood = true;
    }

    return allGood;

}


