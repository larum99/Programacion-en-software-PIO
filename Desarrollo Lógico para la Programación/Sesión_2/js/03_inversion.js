let p1 = parseFloat(prompt('Inversión 1, $'));
let p2 = parseFloat(prompt('Inversión 2, $'));
let p3 = parseFloat(prompt('Inversión 3, $'));

let total = p1 + p2 + p3;

porc1 = (p1/total) * 100;
porc2 = (p2/total) * 100;
porc3 = (p3/total) * 100;

document.write('Total inversión, $' + total);
document.write('<br>');
document.write('Porcentaje de inversión 1, $' + porc1.toFixed(2) + '%');
document.write('<br>');
document.write('Porcentaje de inversión 2, $' + porc2.toFixed(2) + '%');
document.write('<br>');
document.write('Porcentaje de inversión 3, $' + porc3.toFixed(2) + '%');


