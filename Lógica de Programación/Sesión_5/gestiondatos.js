let listaEmpleados = [];

const objEmpleado = {
id: "",
nombre: "",
cargo: "",
};

let editando = false;

const formulario = document.querySelector("#frmIngreso");
const nombreInput = document.querySelector("#nombre");
const cargoInput = document.querySelector("#cargo");
const btnAgregar = document.querySelector("#btnAgregar");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
e.preventDefault();

if (nombreInput.value === "" || cargoInput.value === "") {
    alert("Campos obligatorios");
    return;
}

if (editando) {
    editarEmpleado();
    editando = false;
} else {
    objEmpleado.id = Date.now();
    objEmpleado.nombre = nombreInput.value;
    objEmpleado.cargo = cargoInput.value;

    agregarEmpleado();
}
}

function agregarEmpleado() {
listaEmpleados.push({ ...objEmpleado });
mostrarEmpleado();
formulario.reset();
limpiarObjeto();
}

function mostrarEmpleado() {
limpiarHTML();

const divEmpleados = document.querySelector(".div-empleados");
listaEmpleados.forEach((empleado) => {
    const { id, nombre, cargo } = empleado;

    const parrafo = document.createElement("p");
    parrafo.textContent = `${id} - ${nombre} - ${cargo}`;
    parrafo.dataset.id = id;

    const editarBoton = document.createElement("button");
    editarBoton.onclick = () => cargarEmpleado(empleado);
    editarBoton.textContent = "Editar";
    editarBoton.classList.add("btn", "btn-editar");
    parrafo.append(editarBoton);

    const hr = document.createElement("hr");

    divEmpleados.appendChild(parrafo);
    divEmpleados.appendChild(hr);
});
}

function cargarEmpleado(empleado) {
const { id, nombre, cargo } = empleado;

nombreInput.value = nombre;
cargoInput.value = cargo;
objEmpleado.id = id;

formulario.querySelector('button[type="submit"]').textContent = "Actualizar"; editando = true;
}

function editarEmpleado() {
objEmpleado.nombre = nombreInput.value;
objEmpleado.cargo = cargoInput.value;

listaEmpleados = listaEmpleados.map((empleado) => {
    if (empleado.id === objEmpleado.id) {
    empleado.nombre = objEmpleado.nombre;
empleado.cargo = objEmpleado.cargo;
    }
    return empleado;
});

limpiarHTML();
mostrarEmpleado();
formulario.reset();
formulario.querySelector('button[type="submit"]').textContent = "Agregar Registro";
editando = false;
}

function eliminarEmpleado(id) {
listaEmpleados = listaEmpleados.filter((empleado) => empleado.id !== id);
limpiarHTML();
mostrarEmpleado();
}

function limpiarHTML() {
const divEmpleados = document.querySelector(".div-empleados");
while (divEmpleados.firstChild) {
    divEmpleados.removeChild(divEmpleados.firstChild);
}
}

function limpiarObjeto() {
objEmpleado.id = "";
objEmpleado.nombre = "";
objEmpleado.cargo = "";
}