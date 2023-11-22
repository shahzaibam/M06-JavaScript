$(document).ready(function() {
    $('#left-container img').draggable({
        revert: 'invalid', //si el elemento arrastrado no se suelta en un contenedor válido (animales o flores), el elemento volverá automáticamente a su posición original.
        helper: 'clone' //clona la imagen original y lo pone en el div que rastreamos.
    });

    $('#animals-container, #flowers-container').droppable({
        accept: '.draggable', //indica que solo se aceptarán elementos con la clase "draggable"
        drop: function(event, ui) {
            var destinationContainer = $(this); //contenedor actual donde se hace el drop de la imagen
            var draggedImage = ui.helper.clone(); //es un clon de la imagen que se está arrastrando.

            // Comprobar si la imagen pertenece al tipo de contenedor actual
            if (destinationContainer.attr('id') === 'animals-container' && draggedImage.hasClass('animal')) {
                draggedImage.appendTo(destinationContainer).draggable({
                    revert: 'invalid',
                    helper: 'clone'
                }).css("width", "50px");
            } else if (destinationContainer.attr('id') === 'flowers-container' && draggedImage.hasClass('flores')) {
                draggedImage.appendTo(destinationContainer).draggable({
                    revert: 'invalid',
                    helper: 'clone'
                }).css("width", "50px");
            } else {
                // Si no es el contenedor correcto no lo inserta
                ui.helper.remove();
            }
        }
    });
});
