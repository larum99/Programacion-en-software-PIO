let ht = parseFloat(prompt('Horas Trabajadas: '));
let vh = parseFloat(prompt('Valor hora, $'));

sb = ht * vh;
salud = sb * 0.04;
pension = sb * 0.04;
ahorro = sb * 0.015;

sn = sb - (salud + pension + ahorro);

document.write('Salario básico, $' + sb);
document.write('<br>');
document.write('Salud, $' + salud);
document.write('<br>');
document.write('Pensión, $' + pension);
document.write('<br>');
document.write('Ahorro, $' + ahorro);
document.write('<br>');
document.write('Salario Neto, $' + sn)