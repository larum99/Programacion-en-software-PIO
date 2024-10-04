let pc = parseInt(prompt('Preguntas correctas: '));
let pinc = parseInt(prompt('Preguntas incorrectas: '));
let pb = parseInt(prompt('Preguntas en blanco: '));

puntuacion_pc = pc * 5;
puntuacion_pinc = pinc * (-2);
puntuacion_pb = pb * 1;

total = puntuacion_pc + puntuacion_pinc + puntuacion_pb;

document.write('Total puntuación = ' + total + 'puntos');