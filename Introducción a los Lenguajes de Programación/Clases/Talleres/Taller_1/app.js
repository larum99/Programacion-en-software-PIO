var menu_showed = false;
let menu = document.getElementById("nav");
function showhidemenu(){
    if(menu_showed == false){
        menu.style.display = "block";
        menu_showed = true;
    }
    else{
        menu.style.display = "none";
        menu_showed = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_showed = false;
    }
}

function madeBar(id_bar){
    for(i=0; i <= 16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_bar.appendChild(div);
    }
}

let html = document.getElementById("html");
madeBar(html);
let javascript = document.getElementById("javascript");
madeBar(javascript);
let react = document.getElementById("react");
madeBar(react);
let tailwindcss = document.getElementById("tailwindcss");
madeBar(tailwindcss);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 11, 1, intervalHtml);
        },100);
    }
}


function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}


window.onscroll = function(){
    efectoHabilidades();
}