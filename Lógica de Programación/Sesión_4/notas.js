let nota1, nota2, nota3;

nota1 = parseFloat(prompt('Nota 1:'));
nota2 = parseFloat(prompt('Nota 2:'));
nota3 = parseFloat(prompt('Nota 3:'));

let promedio = (nota1 + nota2 + nota3) / 3;

// if(promedio >= 3.5){
//     document.write('El estudiante ha sido: Aprobado');
// } else {
//     if(promedio <= 3.4){
//         document.write('El estudiante debe realizar: Plan de mejoramiento');
//     } else {
//         document.write('El estudiante ha sido: Reprobado');
//     }
// }


if(promedio >= 3.5){
    document.write('El estudiante ha sido: Aprobado');
}
else if(promedio >= 3.4){
    document.write('El estudiante debe realizar: Plan de mejoramiento');
}
else {
    document.write('El estudiante ha sido: Reprobado');
}