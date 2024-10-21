const form = document.getElementById('formRegistro');
const nombreInput = document.getElementById('nombreInput');
const emailInput = document.getElementById('emailInput');
const tableBody = document.getElementById('tableBody');

let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const nombre = nombreInput.value;
    const email = emailInput.value;

    if(nombre && email){
        const newData = {nombre, email};
        data.push(newData);
        saveDataToLocalStorage();
        renderTable();
        form.reset();
    }

})

function saveDataToLocalStorage(){
    localStorage.setItem('formData', JSON.stringify(data));
}

function renderTable(){
    tableBody.innerHTML = '';
    data.forEach(function (item, index){
        const row = document.createElement('tr');
        const nombreCelda = document.createElement('td');
        const emailCelda = document.createElement('td');
        const accionCelda = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        nombreCelda.textContent = item.nombre;
        emailCelda.textContent = item.email;
        editButton.textContent = 'Editar';
        deleteButton.textContent = 'Eliminar';

        editButton.classList.add("button", 'button--secondary');
        deleteButton.classList.add("button", 'button--danger');

        editButton.addEventListener('click', function() {
            editData(index);
        })

        deleteButton.addEventListener('click', function() {
            deleteData(index);
        })

        accionCelda.appendChild(editButton);
        accionCelda.appendChild(deleteButton);

        row.appendChild(nombreCelda);
        row.appendChild(emailCelda);
        row.appendChild(accionCelda);

        tableBody.appendChild(row);
    });
}


function editData(index){
    const item = data[index];
    nombreInput.value = item.nombre;
    emailInput.value = item.email;
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}

function deleteData(index){
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}

renderTable();
    



