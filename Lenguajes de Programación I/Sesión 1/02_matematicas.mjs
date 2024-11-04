const PI = 3.141592

function suma(a, b){
    return a + b
}

function resta(a, b){
    return a - b
}

function multiplicacion(a, b){
    return a*b
}

function division(a, b){
    if(b == 0){
        mostrarErrorDivision()
    }
    else{
        return a / b
    }
}

function mostrarErrorDivision(){
    console.log('Error, no se puede dividir sobre 0')
}

// module.exports = {
//     suma,
//     resta,
//     multiplicacion,
//     division,
//     PI
// }

export {
    suma,
    resta,
    multiplicacion,
    division,
    PI
}