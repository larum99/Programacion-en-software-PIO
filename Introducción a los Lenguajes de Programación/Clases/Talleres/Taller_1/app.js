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

let links = document.querySelector("nav a");
for(var x = 0; x < links.clientHeight; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_showed = false;
    }
}
