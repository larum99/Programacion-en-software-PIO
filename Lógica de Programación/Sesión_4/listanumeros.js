let cp = 0, cn = 0, cc = 0;
let n = parseInt(prompt('Cantidad de números'));
for(let i = 0; i < n; i++){
    let num = parseInt(prompt('Ingrese el número' + (i+1) + ': '));
    if(num == 0){
        cc++;
    }
    else if(num > 0){
        cp++;
    }
    else{
        cn++;
    }
}

document.writeln('Cantidad de positivos: ' + cp);
document.writeln('Cantidad de negativos: ' + cn);
document.write('Cantidad neutros: ' + cc);
