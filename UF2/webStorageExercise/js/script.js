document.addEventListener("DOMContentLoaded", () => {

    let backgroundCookie = getCookie("background");
    let fontCookie = getCookie("font");
    let imgCookie = getCookie("img");

    let backColor = document.getElementById("chooseColor").value;
    let fontStyle = document.getElementById("chooseFontStyle").value;
    let img_src = document.getElementById("chooseImg").value;

    
    if(backgroundCookie) {
        document.body.style.background = backgroundCookie;
        document.getElementById("chooseColor").value = backgroundCookie;
    }else {
        document.body.style.background = backColor;
        document.getElementById("chooseColor").value = backColor;
    }


    if(fontCookie) {
        document.body.style.fontFamily = fontCookie;
        document.getElementById("chooseFontStyle").value = fontCookie;

    }else{
        document.body.style.fontFamily = fontStyle;
        document.getElementById("chooseFontStyle").value = fontStyle;
    }



    let createImg = document.createElement("img");
    if(imgCookie) {
        createImg.src = "./assets/img/" + imgCookie + ".png";
        document.getElementById("chooseImg").value = imgCookie;
    }else {
        createImg.src = "./assets/img/" + img_src + ".png";
        document.getElementById("chooseImg").value = img_src;
    }

    document.getElementById("showImg").appendChild(createImg);
});



document.getElementById("chooseColor").addEventListener("change", () => {
    let backColor = document.getElementById("chooseColor").value;
    document.body.style.background = backColor;

    setCookie("background", backColor, 7);
});



document.getElementById("chooseFontStyle").addEventListener("change", () => {
    let fontStyle = document.getElementById("chooseFontStyle").value;
    document.body.style.fontFamily = fontStyle;

    setCookie("font", fontStyle, 7);
});




document.getElementById("chooseImg").addEventListener("input", () => {
    let img_src = document.getElementById("chooseImg").value;

    let createImg = document.createElement("img");
    createImg.src = "./assets/img/" + img_src + ".png";

    let showImg = document.getElementById("showImg");
    while (showImg.firstChild) {
        showImg.removeChild(showImg.firstChild);
    }


    showImg.appendChild(createImg);
    setCookie("img", img_src, 7);
});




function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
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







