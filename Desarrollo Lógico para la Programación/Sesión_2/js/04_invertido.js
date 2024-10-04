
numero =  parseInt(prompt('Número: '));
cifra_1 = Math.floor(numero / 10);
cifra_2 = numero % 10;
invertido = (cifra_2 * 10) + cifra_1;

document.write('El número invertido es: ' + invertido)