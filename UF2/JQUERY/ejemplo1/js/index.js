$(document).ready(function () {
    // alert("Hola Jquery!!!");

    //esconde => style.display="none"
    // $("p").hide(); //accedo a todos los tags p y los escondo

    // $("#myP2").hide();
    // $(".test").hide();
    // $("p:first").hide();



    // $("#myBtn").click(() => {
    //     alert("soy arrow funcio");
    // })


    $("#myBtn").click(clicantBoto);

    $("#myP").on({
        click: function () {
            $(this).css("background-color", "yellow");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightBlue");
        },
    })

    $("#myP").html("Hello DAW 2 !!!");


})



function clicantBoto() {
    let valorInput = $("#myInput").val();

    alert(valorInput);
}

