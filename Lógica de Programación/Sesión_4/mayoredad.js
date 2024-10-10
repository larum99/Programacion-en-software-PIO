let nombre;
let edad;

nombre =  prompt('digite su nombre: ');
edad = parseInt(prompt('Digite su edad: '));
if(edad >= 18){
    document.write(nombre + ' es mayor de edad');
} else {
    document.write(nombre + ' es menor de edad');
}