/*
    A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla 
    la siguiente información:

        Número de enlaces de la página
        Dirección a la que enlaza el penúltimo enlace
        Numero de enlaces que enlazan a http://prueba
        Número de enlaces del tercer párrafo
 */

window.onload = function() {
    var info = document.getElementById('informacion');

    //Número de enlaces de la página
    var enlaces = document.getElementsByTagName('a');
    info.innerHTML = 'Número de enlaces: '+enlaces.length;

    //Dirección a la que enlaza el penúltimo enlace
    var mensaje = 'El penúltimo enlace apunta a: '+enlaces[enlaces.length-2].href;
    info.innerHTML = info.innerHTML + '<br>' + mensaje;

    //Número enlaces que enlazan a http://prueba
    var contador = 0;
    for(var i = 0; i < enlaces.length; i++){
        if(enlaces[i].href == 'http://prueba' || enlaces[i].href == 'http://prueba/'){
            contador++;
        }
    }
    info.innerHTML = info.innerHTML + '<br>' + contador + 'enlaces apuntan a http://prueba/'

    //Número de enlaces del tercer párrafo
    var parrafos = document.getElementsByTagName('p');
    enlaces = parrafos[2].getElementsByTagName('a');
    info.innerHTML = info.innerHTML + '<br>' + 'Número de enlaces del tercer párrafo: '+enlaces.length;
}