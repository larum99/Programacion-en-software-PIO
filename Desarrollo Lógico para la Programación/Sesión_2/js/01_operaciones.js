let a = parseFloat(prompt("Número 1: "));
let b = parseFloat(prompt("Número 2: "));

suma = a + b;
resta = a - b;
multiplicacion = a * b;
if (b == 0) {
document.write("No se puede realizar");
} else {
division = a / b;
document.write("división: " + division);
}

document.write("Suma: " + suma);
document.write("<br>");
document.write("Resta: " + resta);
document.write("<br>");
document.write("Multiplicación: " + multiplicacion);
document.write("<br>");
if (b == 0) {
    document.write("No se puede realizar");
    } else {
    division = a / b;
    document.write("división: " + division);
    }
