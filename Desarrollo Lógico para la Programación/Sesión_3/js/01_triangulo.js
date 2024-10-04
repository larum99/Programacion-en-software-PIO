let a = parseFloat(prompt('Lado A (cm): '));
let b = parseFloat(prompt('Lado B (cm): '));
let c = parseFloat(prompt('Lado C (cm): '));

s = (a + b + c) / 2;
area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

document.write('Semiperimetro ' + s + 'cm');
document.write('<br>');
document.write('Área: ' + area + 'cm');