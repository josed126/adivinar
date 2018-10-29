var int1,
    int2,
    aleatorio = Math.round((Math.random()*100)+1); // Definicion de la variable para el numero aleatorioo

//aqui vamos a iniciar la funcion del incio del juego
function iniciarjuego() {
    int1 = parseInt(document.getElementById("intentos").value, 10);
    int2 = int1;
    document.getElementsByClassName("pag1")[0].style = "display:none"; // aqui vamos a declarar la primera pagina
    document.getElementsByClassName("pag2")[0].style = "display:block"; // aqui vamos a declarar la segunda pagina que esta bloqueada
    document.getElementsByClassName("reinicio")[0].style = "display:none";
    document.getElementById("restantes").innerHTML = int2;
    document.getElementsByClassName("intentos")[0].style = "display:block";
    
    aleatorio();
}
// aqui vamos a declarar la segunda pagina
function reiniciarJuego() {
    document.getElementsByClassName("pag1")[0].style = "display:block";
    document.getElementsByClassName("pag2")[0].style = "display:none";
   
}
//aqui va a dar la funcion de comprobar para el numero aleatorio
function comprobar() {
    var num = parseInt(document.getElementById("number").value, 10), // aqui es donde nosotro ponemos el numero
        mens = document.getElementById("Mensaje"),
        num_mayor = document.getElementById("Mayor"),
        num_menor = document.getElementById("Menor");
    if (int2 > 0) {
        int2 = int2 - 1; // aqui para usuarla para los numero por si van fallando
        if (aleatorio === num) { // aqui cuando hacertamos el numero
            int2 = int1 - int2;
            mens.innerHTML = "<p>GANASTE has conseguido " + aleatorio + " en " + int2 + " intentos</p>";
            document.getElementsByClassName("intentos")[0].style = "display:none";
            document.getElementsByClassName("reinicio")[0].style = "display:block";
        } else if (aleatorio < num) { // aqui cuando el numero el mayor 
            mens.innerHTML = "<p>El número " + num + " es mayor del que tengo en la cabeza.</p>";
            num_mayor.innerHTML += num + "&nbsp;";
            document.getElementById("restantes").innerHTML = int2;

        } else if (aleatorio > num) { //aqui cuando el numero es menor
            mens.innerHTML = "<p>El número " + num + " es menor del que tengo yo en cabeza</p>";
            num_menor.innerHTML += num + "&nbsp;";
            document.getElementById("restantes").innerHTML = int2;
        }
    } else { // aqui al final no hemos acertado con el numero con el mensaja
        mens.innerHTML = "<p>Se te han acadado los " + int1 + " intentos ¡¡HAS PERDIDO!! el numero era " + aleatorio;
        document.getElementsByClassName("reinicio")[0].style = "display:block";
    }
    document.getElementById("number").value = "";
}