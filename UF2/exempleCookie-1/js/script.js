document.addEventListener("DOMContentLoaded", function () {
    //crear una cookie al navegador
    // console.log(document.cookie);


    //cookies navegador
    //crear una cookie de nom user i de contingut Marga1989
    //

    const d = new Date(); //el dia d'avui en milisegons des del 1/1/1970
    d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));//afegim 3 dies en mili segons (60 per 60 es una hora), (una hora per 24 es un dia), (un dia per 3 son 3 dies), (3 dies per 1000 dona milisegons)
    // document.cookie = "user=Marga1989; max-age=86400"; //temps en GMT (max-age també expira)
    // document.cookie = "user=Marga1989; expires=" + d.toUTCString(); //temps en UTC
    // document.cookie = "user=Marga1989; expires=Thu, 18 Dec 2023 12:00:00 UTC"; //també es pot fer ficant la data directament
    console.log(d.toUTCString());
    console.log(document.cookie);

    // document.cookie = "user=; expires=Thu, 01 Dec 2013 00:00:00 UTC; path=/;" //esborrem la cookie user, si no li assignem res, es que s'ha esborrat i si assignem un expire amb data antiga també ho esborra

    //crear 3 cookies amb tenos de vida el que duri la sessió
    document.cookie = "color=green";
    document.cookie = "fons=clar";
    document.cookie = "lletra=gran";

    //manipular la cookie lletra, com ho faig?

    //1- tornant a crear la i cambiarli el valor si vols
    document.cookie = "lletra=normal; max-age=3600"; //cambiem el valor de lletra gran a normal i la expiració será en una hora perque son 3600 segons son 1 hora
    console.log(document.cookie);


    //2 - fent servir una funció
    // console.log(getCookie("lletra"));

    //saber les visites

    checkCookie("comptador")

})

//funció agafada de w3schools que et dona el valor de la cookie i está tal cual no la hem cambiat
//si vols el valor de la cookie lletra, la funció fará un return i et donará el valor, en el cas de lletra retornará "normal"
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
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


//funcio w3 schools tunejada i millorada
//aquesta funcio mira si tenim una cookie quan entrem al navegador
function checkCookie(cname) {
    let valorCookie = getCookie(cname);
    if (valorCookie == "") { //si el valor es buit es que no existeix, i ho crearem ara amb valor 1
        //  alert("Welcome again " + username);
        document.cookie = "comptador=1";
    } else { //si ja existeix li sumarem 1 a la cookie
        valorCookie++;
        document.cookie = "comptador=" + valorCookie;
    }

    document.getElementById("totalContador").innerHTML = getCookie("comptador");
}