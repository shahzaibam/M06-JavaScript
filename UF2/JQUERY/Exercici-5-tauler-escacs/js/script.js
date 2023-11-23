$(document).ready(function(){
    $("table").css("background-color", "#e5c8a0");
    $("tr:odd td:even").css("background-color", "#ba6a2b");
    $("tr:even td:odd").css("background-color", "#ba6a2b");

    /**
     * Tambien se puede hacer de esta manera con el ">"
     */
    // $("tr:odd td:even").css("background-color", "black"); 
    // $("tr:even td:odd").css("background-color", "black");

});