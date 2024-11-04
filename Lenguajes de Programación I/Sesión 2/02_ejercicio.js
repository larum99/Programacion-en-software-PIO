const os = require('os')

console.log('Memoria libre: '+ os.freemem())

const array = []
for(let i = 0; i < 1000000; i++){
    array.push(i)
}
console.log('Memoria libre después de crear el array: '+ os.freemem())

