$("#mySubmit").click(validarDatos);

function validarDatos() {
    let nombreVal = $("#nombre").val();
    let DNIVal = $("#dni").val();
    let edadVal = $("#edad").val();

    let okNombre = false;
    let okDni = false;
    let okEdad = false;

    var patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    var patronDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/;
    var patronEdad = /^\d+$/;


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
        $('#mensajeDni').hide();
        okEdad = true;
    } else {
        $('#mensajeDni').show();
        $('#mensajeEdad').text('Edad inválida').css('color', 'red');
    }



}


