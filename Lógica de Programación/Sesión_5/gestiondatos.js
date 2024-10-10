let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    cargo: ''
}

let editando = false;

const formulario = document.querySelector('#frmIngreso');
const nombreInput = document.querySelector('#nombre');
const cargoInput = document.querySelector('#cargo');
const btnAgregar = document.queryselector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e)