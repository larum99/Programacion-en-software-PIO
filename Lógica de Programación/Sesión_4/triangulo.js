let cont = 0;
for(let i = 0; i < 2; i++){
    let base = parseInt(prompt('Base: '));
    let altura = parseInt(prompt('Altura: '));
    let superficie =  base * altura;
    if(superficie > 12){
        cont++
    }
    document.write('Triangulo No ' +(i+1) + ': ' + '<br>');
    document.write('Base: ' + base +'<br>');
    document.write('Altura: ' + altura +'<br>');
    document.write('Superficie: ' + superficie +'<br>');
}

document.write('Cantidad de triángulo con superficie mayor a 12' + cont);