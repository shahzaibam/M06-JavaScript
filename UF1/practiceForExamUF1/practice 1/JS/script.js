document.getElementById("image-1").addEventListener("click", () => {


    if(document.getElementById("image-1").style.height == "600px" && document.getElementById("image-1").style.width == "800px") {

        document.getElementById("image-1").style.height = "200px";
        document.getElementById("image-1").style.width = "200px";

    }else {
        document.getElementById("image-1").style.height = "600px"
        document.getElementById("image-1").style.width = "800px"
    }


})


document.getElementById("image-2").addEventListener("click", () => {


    if(document.getElementById("image-2").style.height == "600px" && document.getElementById("image-2").style.width == "800px") {

        document.getElementById("image-2").style.height = "200px";
        document.getElementById("image-2").style.width = "200px";

    }else {
        document.getElementById("image-2").style.height = "600px"
        document.getElementById("image-2").style.width = "800px"
    }


})