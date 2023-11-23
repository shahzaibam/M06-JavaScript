$(document).ready(function () {

    let ciudades = ["Barcelona", "Madrid", "Valencia", "Sevilla", "Malaga"];

    for (let index = 0; index < ciudades.length; index++) {

        let li = document.createElement("li");
        $(li).text(ciudades[index]);

        $("#lista-ul").append(li);
    }




    $("#btn-final").click(function () {
        $("ul").append("<li><b>Ciudad<b></li>");
    });


    $("#btn-start").click(function () {
        $("ul").prepend("<li><b>Ciudad<b></li>");
    });


    $("#btn-delete-last").click(function () {
        $("ul").children().last().remove();
    });

    $("#btn-delete-first").click(function () {
        $("ul").children().first().remove();
    });


    $("#btn-delete-first-last").click(function () {
        $("ul").children().last().remove();
        $("ul").children().first().remove();
    });




    // $('.parent').children().last().remove();

});
