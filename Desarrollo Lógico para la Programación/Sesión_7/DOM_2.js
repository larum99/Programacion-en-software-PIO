function add(){
    var elemento = document.createElement('li');
    var texto = document.createTextNode('Programación  ');
    elemento.appendChild(texto);

    var lista = document.getElementById('lista');
    lista.appendChild(elemento);

    var nuevoElemento = '<li> Bases II </li>';
    lista.innerHTML = lista.innerHTML + nuevoElemento;
}